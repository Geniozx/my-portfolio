import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createProject,
  getAdminProjectById,
  updateProject,
  updateProjectTechnologies,
} from "../../services/projectService.js";
import { getTechnologies } from "../../services/technologyService.js";

const initialFormData = {
  title: "",
  slug: "",
  short_description: "",
  description: "",
  problem: "",
  solution: "",
  features: "",
  challenges: "",
  lessons_learned: "",
  project_type: "",
  status: "",
  github_url: "",
  live_url: "",
  featured: false,
  published: false,
  display_order: 0,
};

function AdminProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);

  const [formData, setFormData] = useState(initialFormData);
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologyIds, setSelectedTechnologyIds] = useState([]);

  const [loading, setLoading] = useState(isEditing);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFormData() {
      const token = localStorage.getItem("adminToken");

      try {
        const technologyData = await getTechnologies();
        setTechnologies(technologyData);

        if (isEditing) {
          const project = await getAdminProjectById(id, token);

          setFormData({
            title: project.title || "",
            slug: project.slug || "",
            short_description: project.short_description || "",
            description: project.description || "",
            problem: project.problem || "",
            solution: project.solution || "",
            features: project.features || "",
            challenges: project.challenges || "",
            lessons_learned: project.lessons_learned || "",
            project_type: project.project_type || "",
            status: project.status || "",
            github_url: project.github_url || "",
            live_url: project.live_url || "",
            featured: Boolean(project.featured),
            published: Boolean(project.published),
            display_order: project.display_order ?? 0,
          });

          setSelectedTechnologyIds(
            (project.technologies || []).map(
              (technology) => technology.id,
            ),
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadFormData();
  }, [id, isEditing]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleTechnologyChange(technologyId) {
    setSelectedTechnologyIds((currentIds) => {
      if (currentIds.includes(technologyId)) {
        return currentIds.filter(
          (currentId) => currentId !== technologyId,
        );
      }

      return [...currentIds, technologyId];
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem("adminToken");

    setSubmitting(true);
    setError("");

    try {
      const projectData = {
        ...formData,
        display_order: Number(formData.display_order),
      };

      let savedProject;

      if (isEditing) {
        savedProject = await updateProject(
          id,
          projectData,
          token,
        );
      } else {
        savedProject = await createProject(
          projectData,
          token,
        );
      }

      await updateProjectTechnologies(
        savedProject.id,
        selectedTechnologyIds,
        token,
      );

      navigate("/admin/projects");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="admin-project-form-page">
        <p>Loading project...</p>
      </main>
    );
  }

  return (
    <main className="admin-project-form-page">
      <div className="admin-page-header">
        <p className="admin-eyebrow">Portfolio Content</p>

        <h2>
          {isEditing ? "Edit Project" : "Add Project"}
        </h2>

        <p>
          {isEditing
            ? "Update this portfolio project and its case study."
            : "Create a new portfolio project and case study."}
        </p>
      </div>

      {error && (
        <p className="admin-projects-error" role="alert">
          {error}
        </p>
      )}

      <form
        className="admin-project-form"
        onSubmit={handleSubmit}
      >
        <section className="admin-form-section">
          <div className="admin-form-section-heading">
            <p className="admin-card-label">Project Details</p>
            <h3>Basic Information</h3>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="slug">Slug</label>
              <input
                id="slug"
                name="slug"
                type="text"
                value={formData.slug}
                onChange={handleChange}
                required
              />
            </div>

            <div className="admin-form-field admin-form-field-full">
              <label htmlFor="short_description">
                Short Description
              </label>

              <textarea
                id="short_description"
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>
          </div>
        </section>

        <section className="admin-form-section">
          <div className="admin-form-section-heading">
            <p className="admin-card-label">Case Study</p>
            <h3>Project Story</h3>
          </div>

          <div className="admin-form-grid">
            {[
              ["description", "Overview"],
              ["problem", "Problem"],
              ["solution", "Solution"],
              ["features", "Features"],
              ["challenges", "Challenges"],
              ["lessons_learned", "Lessons Learned"],
            ].map(([name, label]) => (
              <div
                className="admin-form-field admin-form-field-full"
                key={name}
              >
                <label htmlFor={name}>{label}</label>

                <textarea
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  rows="6"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="admin-form-section">
          <div className="admin-form-section-heading">
            <p className="admin-card-label">Organization</p>
            <h3>Project Metadata</h3>
          </div>

          <div className="admin-form-grid">
            <div className="admin-form-field">
              <label htmlFor="project_type">Project Type</label>
              <input
                id="project_type"
                name="project_type"
                type="text"
                value={formData.project_type}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="status">Status</label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select status</option>
                <option value="In Development">In Development</option>
                <option value="Completed">Completed</option>
                <option value="Maintained">Maintained</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            <div className="admin-form-field">
              <label htmlFor="github_url">GitHub URL</label>
              <input
                id="github_url"
                name="github_url"
                type="url"
                value={formData.github_url}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="live_url">Live URL</label>
              <input
                id="live_url"
                name="live_url"
                type="url"
                value={formData.live_url}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="display_order">
                Display Order
              </label>

              <input
                id="display_order"
                name="display_order"
                type="number"
                min="0"
                value={formData.display_order}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="admin-form-toggles">
            <label className="admin-form-toggle">
              <input
                name="published"
                type="checkbox"
                checked={formData.published}
                onChange={handleChange}
              />
              <span>Published</span>
            </label>

            <label className="admin-form-toggle">
              <input
                name="featured"
                type="checkbox"
                checked={formData.featured}
                onChange={handleChange}
              />
              <span>Featured</span>
            </label>
          </div>
        </section>

        <section className="admin-form-section">
          <div className="admin-form-section-heading">
            <p className="admin-card-label">Tech Stack</p>
            <h3>Technologies</h3>
          </div>

          <div className="admin-technology-options">
            {technologies.map((technology) => (
              <label
                className="admin-technology-option"
                key={technology.id}
              >
                <input
                  type="checkbox"
                  checked={selectedTechnologyIds.includes(
                    technology.id,
                  )}
                  onChange={() =>
                    handleTechnologyChange(technology.id)
                  }
                />

                <span>{technology.name}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="admin-form-actions">
          <Link
            className="button button-secondary"
            to="/admin/projects"
          >
            Cancel
          </Link>

          <button
            className="button button-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Saving..."
              : isEditing
                ? "Save Changes"
                : "Create Project"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default AdminProjectForm;
