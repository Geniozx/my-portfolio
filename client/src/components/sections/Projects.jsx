import { useEffect, useRef, useState } from "react";

import ProjectCaseStudyModal from "../projects/ProjectCaseStudyModal.jsx";
import {
  getProjectBySlug,
  getProjects,
} from "../../services/projectService.js";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectError, setProjectError] = useState("");

  const triggerButtonRef = useRef(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  async function handleViewCaseStudy(slug, triggerButton) {
    triggerButtonRef.current = triggerButton;

    setProjectLoading(true);
    setProjectError("");

    try {
      const project = await getProjectBySlug(slug);
      setSelectedProject(project);
    } catch (err) {
      setProjectError(err.message);
    } finally {
      setProjectLoading(false);
    }
  }


  function handleCloseCaseStudy() {
    setSelectedProject(null);

    requestAnimationFrame(() => {
      triggerButtonRef.current?.focus();
    });
  }

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">Projects</p>

          <h2>
            Selected work built
            <span> from idea to application.</span>
          </h2>

          <p>
            A selection of projects that demonstrate how I approach frontend
            interfaces, backend APIs, databases, authentication, and complete
            application workflows.
          </p>
        </div>

        {loading && (
          <p className="section-status">
            Loading projects...
          </p>
        )}

        {!loading && error && (
          <p className="section-status section-error">
            {error}
          </p>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="section-status">
            No projects available.
          </p>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-card-visual">
                  {project.cover_image ? (
                    <img
                      src={project.cover_image.image_url}
                      alt={
                        project.cover_image.alt_text ||
                        `${project.title} project cover`
                      }
                    />
                  ) : (
                    <>
                      <span>{project.project_type}</span>

                      <div
                        className="project-card-symbol"
                        aria-hidden="true"
                      >
                        &lt;/&gt;
                      </div>
                    </>
                  )}
                </div>

                <div className="project-card-content">
                  <p className="project-type">
                    {project.project_type}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.short_description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology.id}>
                        {technology.name}
                      </span>
                    ))}
                  </div>

                  <button
                    className="project-link"
                    type="button"
                    onClick={(event) =>
                      handleViewCaseStudy(project.slug, event.currentTarget)
                    }
                    disabled={projectLoading}
                  >
                    View Case Study
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {projectError && (
        <p className="section-status section-error">
          {projectError}
        </p>
      )}

      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={handleCloseCaseStudy}
      />
    </section>
  );
}

export default Projects;
