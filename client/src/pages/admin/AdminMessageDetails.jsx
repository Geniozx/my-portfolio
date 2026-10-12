import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  deleteAdminMessage,
  getAdminMessageById,
  updateAdminMessage,
} from "../../services/messageService.js";

function AdminMessageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadMessage() {
      const token = localStorage.getItem("adminToken");

      try {
        const data = await getAdminMessageById(id, token);
        setMessage(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMessage();
  }, [id]);

  async function handleReadStatus() {
    const token = localStorage.getItem("adminToken");
    const newReadStatus = !message.is_read;

    setUpdating(true);
    setError("");

    try {
      const data = await updateAdminMessage(
        id,
        {
          is_read: newReadStatus,
        },
        token,
      );

      setMessage(data.contact_message);
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Delete this contact message? This cannot be undone.",
    );

    if (!confirmed) {
      return;
    }

    const token = localStorage.getItem("adminToken");

    setDeleting(true);
    setError("");

    try {
      await deleteAdminMessage(id, token);
      navigate("/admin/messages");
    } catch (err) {
      setError(err.message);
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <main className="admin-message-details-page">
        <p>Loading message...</p>
      </main>
    );
  }

  if (!message) {
    return (
      <main className="admin-message-details-page">
        <div className="admin-page-header">
          <h2>Message Details</h2>
        </div>

        <p className="admin-projects-error" role="alert">
          {error || "Message not found."}
        </p>

        <Link
          className="button button-secondary"
          to="/admin/messages"
        >
          Back to Messages
        </Link>
      </main>
    );
  }

  return (
    <main className="admin-message-details-page">
      <div className="admin-page-header">
        <p className="admin-eyebrow">Contact Message</p>

        <h2>Message Details</h2>

        <p>
          Review and manage this portfolio contact message.
        </p>
      </div>

      {error && (
        <p className="admin-projects-error" role="alert">
          {error}
        </p>
      )}

      <article className="admin-message-details-card">
        <div className="admin-message-details-header">
          <div>
            <h3>{message.name}</h3>

            <a href={`mailto:${message.email}`}>
              {message.email}
            </a>
          </div>

          <span className="admin-message-status">
            {message.is_read ? "Read" : "Unread"}
          </span>
        </div>

        <div className="admin-message-details-meta">
          <p>
            <strong>Subject:</strong>{" "}
            {message.subject || "No subject"}
          </p>

          <p>
            <strong>Received:</strong>{" "}
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>

        <div className="admin-message-body">
          <p>{message.message}</p>
        </div>

        <div className="admin-message-details-actions">
          <button
            className="button button-secondary"
            type="button"
            disabled={updating || deleting}
            onClick={handleReadStatus}
          >
            {updating
              ? "Updating..."
              : message.is_read
                ? "Mark as Unread"
                : "Mark as Read"}
          </button>

          <button
            className="button button-danger"
            type="button"
            disabled={deleting || updating}
            onClick={handleDelete}
          >
            {deleting ? "Deleting..." : "Delete Message"}
          </button>

          <Link
            className="button button-secondary"
            to="/admin/messages"
          >
            Back to Messages
          </Link>
        </div>
      </article>
    </main>
  );
}

export default AdminMessageDetails;
