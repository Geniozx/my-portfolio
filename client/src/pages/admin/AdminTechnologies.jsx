import { useEffect, useRef, useState } from "react";
import {
  createTechnology,
  deleteTechnology,
  getAdminTechnologies,
  updateTechnology,
} from "../../services/technologyService.js";

const initialFormData = {
  name: "",
  category: "",
  icon_url: "",
  display_order: 0,
};

const categories = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

function AdminTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null);
  const technologyRefs = useRef({});

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTechnologies() {
      const token = localStorage.getItem("adminToken");

      try {
        const data = await getAdminTechnologies(token);
        setTechnologies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTechnologies();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  function handleEdit(technology) {
    setEditingId(technology.id);

    setFormData({
      name: technology.name,
      category: technology.category || "",
      icon_url: technology.icon_url || "",
      display_order: technology.display_order ?? 0,
    });

    setError("");

    if (window.innerWidth <= 900) {
      requestAnimationFrame(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function handleCancelEdit() {
    setEditingId(null);
    setFormData(initialFormData);
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem("adminToken");

    const technologyData = {
      ...formData,
      display_order: Number(formData.display_order),
      icon_url: formData.icon_url.trim() || null,
    };

    setSubmitting(true);
    setError("");

    try {
      const editedTechnologyId = editingId;

      if (editingId) {
        const updatedTechnology = await updateTechnology(
          editingId,
          technologyData,
          token,
        );

        setTechnologies((currentTechnologies) =>
          currentTechnologies
            .map((technology) =>
              technology.id === editingId
                ? updatedTechnology
                : technology,
            )
            .sort(
              (a, b) =>
                a.display_order - b.display_order ||
                a.name.localeCompare(b.name),
            ),
        );
      } else {
        const newTechnology = await createTechnology(
          technologyData,
          token,
        );

        setTechnologies((currentTechnologies) =>
          [...currentTechnologies, newTechnology].sort(
            (a, b) =>
              a.display_order - b.display_order ||
              a.name.localeCompare(b.name),
          ),
        );
      }

      setEditingId(null);
      setFormData(initialFormData);

      if (editedTechnologyId && window.innerWidth <= 900) {
        setTimeout(() => {
          technologyRefs.current[
            editedTechnologyId
          ]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(technology) {
    const confirmed = window.confirm(
      `Delete "${technology.name}"? This will also remove it from any projects using it.`,
    );

    if (!confirmed) {
      return;
    }

    const token = localStorage.getItem("adminToken");

    setDeletingId(technology.id);
    setError("");

    try {
      await deleteTechnology(technology.id, token);

      setTechnologies((currentTechnologies) =>
        currentTechnologies.filter(
          (currentTechnology) =>
            currentTechnology.id !== technology.id,
        ),
      );

      if (editingId === technology.id) {
        setEditingId(null);
        setFormData(initialFormData);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return (
      <main className="admin-technologies">
        <p>Loading technologies...</p>
      </main>
    );
  }

  return (
    <main className="admin-technologies">
      <div className="admin-page-header">
        <p className="admin-eyebrow">Technical Skills</p>
        <h2>Technologies</h2>
        <p>
          Manage the technologies available to portfolio projects and the
          public Skills section.
        </p>
      </div>

      {error && (
        <p className="admin-projects-error" role="alert">
          {error}
        </p>
      )}

      <div className="admin-technologies-layout">
        <section
          ref={formRef}
          className="admin-form-section admin-technology-form-card"
        >
          <div className="admin-form-section-heading">
            <p className="admin-card-label">
              {editingId ? "Editing Technology" : "New Technology"}
            </p>

            <h3>
              {editingId ? "Update Technology" : "Add Technology"}
            </h3>
          </div>

          <form
            className="admin-technology-form"
            onSubmit={handleSubmit}
          >
            <div className="admin-form-field">
              <label htmlFor="technology-name">Name</label>

              <input
                id="technology-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="technology-category">
                Category
              </label>

              <select
                id="technology-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="admin-form-field">
              <label htmlFor="technology-icon">
                Icon URL
              </label>

              <input
                id="technology-icon"
                name="icon_url"
                type="url"
                value={formData.icon_url}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="technology-order">
                Display Order
              </label>

              <input
                id="technology-order"
                name="display_order"
                type="number"
                min="0"
                value={formData.display_order}
                onChange={handleChange}
              />
            </div>

            <div className="admin-technology-form-actions">
              {editingId && (
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}

              <button
                className="button button-primary"
                type="submit"
                disabled={submitting}
              >
                {submitting
                  ? "Saving..."
                  : editingId
                    ? "Save Changes"
                    : "Add Technology"}
              </button>
            </div>
          </form>
        </section>

        <section className="admin-technology-list-section">
          <div className="admin-form-section-heading">
            <p className="admin-card-label">
              Portfolio Stack
            </p>

            <h3>Current Technologies</h3>
          </div>

          <div className="admin-technology-list">
            {technologies.map((technology) => (
              <article
                ref={(element) => {
                  technologyRefs.current[technology.id] = element;
                }}
                className="admin-technology-card"
                key={technology.id}
              >
                <div className="admin-technology-card-info">
                  <h4>{technology.name}</h4>

                  <div className="admin-project-meta">
                    <span>{technology.category}</span>
                    <span>
                      Order: {technology.display_order}
                    </span>
                  </div>
                </div>

                <div className="admin-technology-card-actions">
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={() => handleEdit(technology)}
                  >
                    Edit
                  </button>

                  <button
                    className="button button-danger"
                    type="button"
                    onClick={() => handleDelete(technology)}
                    disabled={deletingId === technology.id}
                  >
                    {deletingId === technology.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminTechnologies;
