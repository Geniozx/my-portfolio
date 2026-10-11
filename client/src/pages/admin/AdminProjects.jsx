import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteProject,
  getAdminProjects,
} from "../../services/projectService.js";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      const token = localStorage.getItem("adminToken");

      try {
        const data = await getAdminProjects(token);
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  async function handleDelete(project) {
    const confirmed = window.confirm(
      `Delete "${project.title}"? This cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    const token = localStorage.getItem("adminToken");

    try {
      setDeletingId(project.id);
      setError("");

      await deleteProject(project.id, token);

      setProjects((currentProjects) =>
        currentProjects.filter(
          (currentProject) => currentProject.id !== project.id,
        ),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return (
      <main className="admin-projects">
        <p>Loading projects...</p>
      </main>
    );
  }

  return (
    <main className="admin-projects">
      <div className="admin-page-header admin-page-header-row">
        <div>
          <p className="admin-eyebrow">Portfolio Content</p>
          <h2>Projects</h2>
          <p>
            Manage the projects and case studies displayed throughout your
            portfolio.
          </p>
        </div>

        <Link
          className="button button-primary"
          to="/admin/projects/new"
        >
          Add Project
        </Link>
      </div>

      {error && (
        <p className="admin-projects-error" role="alert">
          {error}
        </p>
      )}

      {projects.length === 0 ? (
        <div className="admin-empty-state">
          <h3>No projects yet</h3>
          <p>Create your first portfolio project to get started.</p>

          <Link
            className="button button-primary"
            to="/admin/projects/new"
          >
            Add Project
          </Link>
        </div>
      ) : (
        <div className="admin-project-list">
          {projects.map((project) => (
            <article
              className="admin-project-card"
              key={project.id}
            >
              <div className="admin-project-card-main">
                <div className="admin-project-card-heading">
                  <div>
                    <p className="admin-card-label">
                      {project.project_type || "Project"}
                    </p>

                    <h3>{project.title}</h3>
                  </div>

                  <div className="admin-project-badges">
                    <span
                      className={
                        project.published
                          ? "admin-badge admin-badge-success"
                          : "admin-badge"
                      }
                    >
                      {project.published
                        ? "Published"
                        : "Unpublished"}
                    </span>

                    {project.featured && (
                      <span className="admin-badge admin-badge-accent">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p>{project.short_description}</p>

                <div className="admin-project-meta">
                  <span>
                    Status: {project.status || "Not set"}
                  </span>

                  <span>
                    Order: {project.display_order}
                  </span>

                  <span>
                    Slug: {project.slug}
                  </span>
                </div>
              </div>

              <div className="admin-project-actions">
                <Link
                  className="button button-secondary"
                  to={`/admin/projects/${project.id}/edit`}
                >
                  Edit
                </Link>

                <button
                  className="button button-danger"
                  type="button"
                  onClick={() => handleDelete(project)}
                  disabled={deletingId === project.id}
                >
                  {deletingId === project.id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default AdminProjects;
