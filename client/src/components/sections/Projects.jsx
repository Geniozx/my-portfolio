const projectPlaceholders = [
  {
    title: "VinoVault 2.0",
    type: "Full-Stack Application",
    description:
      "A wine collection and tasting journal application built with React, Django REST Framework, and PostgreSQL.",
    technologies: ["React", "Python", "Django REST Framework", "PostgreSQL"],
  },
  {
    title: "You Party – I Pour",
    type: "Client Web Application",
    description:
      "A full-stack mobile bartending service platform with booking requests, availability management, gallery media, and an administrator dashboard.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "JavaScript Snake",
    type: "Frontend Project",
    description:
      "A browser-based implementation of the classic Snake game built with vanilla JavaScript, HTML, and CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

function Projects() {
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

        <div className="projects-grid">
          {projectPlaceholders.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-visual" aria-hidden="true">
                <span>{project.type}</span>

                <div className="project-card-symbol">&lt;/&gt;</div>
              </div>

              <div className="project-card-content">
                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <button className="project-link" type="button">
                  View Case Study
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;