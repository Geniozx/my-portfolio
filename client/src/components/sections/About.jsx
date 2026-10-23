function About() {
  return (
    <section id="about" className="portfolio-section about-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-eyebrow">About</p>

          <h2>
            Building practical software
            <span> with purpose.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-visual" aria-hidden="true">
            <p className="about-visual-label">Development Approach</p>

            <div className="about-flow">
              <span>Frontend</span>
              <span className="about-arrow">→</span>
              <span>Backend</span>
              <span className="about-arrow">→</span>
              <span>Database</span>
            </div>

            <div className="about-stack">
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Python</span>
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>Git</span>
            </div>
          </div>

          <div className="about-copy">
            <p>
              My path into software development is grounded in years of professional
              experience where accuracy, problem-solving, communication, and attention
              to detail mattered every day. I bring that same mindset to building
              reliable web applications.
            </p>

            <p>
              I work across the full stack, building responsive React interfaces,
              developing APIs with Node.js or Django, designing PostgreSQL-backed data
              models, and connecting those pieces into complete applications.
            </p>

            <p>
              I focus on practical software with real use cases—from business tools and
              content management workflows to interactive applications—while continuing
              to strengthen my engineering skills with every project I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
