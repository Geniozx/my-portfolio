import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAdminMessages } from "../../services/messageService.js";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMessages() {
      const token = localStorage.getItem("adminToken");

      try {
        const data = await getAdminMessages(token);
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  if (loading) {
    return (
      <main className="admin-messages-page">
        <p>Loading messages...</p>
      </main>
    );
  }

  return (
    <main className="admin-messages-page">
      <div className="admin-page-header">
        <p className="admin-eyebrow">Inbox</p>

        <h2>Messages</h2>

        <p>
          Review messages submitted through your portfolio
          contact form.
        </p>
      </div>

      {error && (
        <p className="admin-projects-error" role="alert">
          {error}
        </p>
      )}

      {messages.length === 0 && !error ? (
        <div className="admin-empty-state">
          <p>No contact messages yet.</p>
        </div>
      ) : (
        <div className="admin-message-list">
          {messages.map((message) => (
            <article
              className={`admin-message-card ${
                message.is_read
                  ? "admin-message-card-read"
                  : "admin-message-card-unread"
              }`}
              key={message.id}
            >
              <div className="admin-message-card-content">
                <div className="admin-message-card-heading">
                  <h3>{message.name}</h3>

                  <span className="admin-message-status">
                    {message.is_read ? "Read" : "Unread"}
                  </span>
                </div>

                <p className="admin-message-email">
                  {message.email}
                </p>

                <p className="admin-message-subject">
                  {message.subject || "No subject"}
                </p>

                <p className="admin-message-date">
                  {new Date(
                    message.created_at,
                  ).toLocaleString()}
                </p>
              </div>

              <div className="admin-message-card-actions">
                <Link
                  className="button button-secondary"
                  to={`/admin/messages/${message.id}`}
                >
                  View Message
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default AdminMessages;
