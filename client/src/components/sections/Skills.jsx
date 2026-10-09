import { useEffect, useMemo, useState } from "react";
import { getTechnologies } from "../../services/technologyService.js";

const categoryOrder = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

function Skills() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTechnologies() {
      try {
        const data = await getTechnologies();
        setTechnologies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTechnologies();
  }, []);

  const skillCategories = useMemo(() => {
    return categoryOrder
      .map((category) => ({
        title: category,
        skills: technologies.filter(
          (technology) => technology.category === category
        ),
      }))
      .filter((category) => category.skills.length > 0);
  }, [technologies]);

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">Skills</p>

          <h2>
            Technologies I use to
            <span> build full-stack applications.</span>
          </h2>

          <p>
            My toolkit covers the complete development process, from building
            responsive interfaces to designing APIs, working with relational
            databases, and managing application code with version control.
          </p>
        </div>

        {loading && (
          <p className="section-status">
            Loading technologies...
          </p>
        )}

        {!loading && error && (
          <p className="section-status section-error">
            {error}
          </p>
        )}

        {!loading && !error && technologies.length === 0 && (
          <p className="section-status">
            No technologies available.
          </p>
        )}

        {!loading && !error && technologies.length > 0 && (
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <article className="skill-card" key={category.title}>
                <div className="skill-card-header">
                  <span className="skill-card-marker" />
                  <h3>{category.title}</h3>
                </div>

                <div className="skill-list">
                  {category.skills.map((technology) => (
                    <span key={technology.id}>
                      {technology.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
