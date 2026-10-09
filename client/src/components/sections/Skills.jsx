const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "Django REST Framework"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

function Skills() {
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

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-header">
                <span className="skill-card-marker" />
                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;