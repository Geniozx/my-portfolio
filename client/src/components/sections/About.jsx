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
              My path into software development is grounded in years of
              professional experience where accuracy, problem-solving, and
              attention to detail mattered every day. I now bring that same
              mindset to building web applications.
            </p>

            <p>
              I enjoy working across the full stack, turning an idea into a
              responsive frontend, designing the API behind it, and connecting
              everything to a reliable database.
            </p>

            <p>
              My focus is continuing to grow as a developer while building
              useful, polished applications that solve real problems for real
              people and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;