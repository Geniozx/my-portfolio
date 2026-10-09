function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="section-container hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">Full-Stack Web Developer</p>

          <h1>
            Hi, I'm
            <span> Eli Rodriguez.</span>
          </h1>

          <p className="hero-description">
            I build modern, responsive web applications with React,
            Node.js, Python, and PostgreSQL.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Work
            </a>

            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-glow" />

          <div className="hero-code-card">
            <div className="hero-code-header">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-code-content">
              <span className="code-muted">{"// developer"}</span>

              <span>
                <strong>const</strong> developer = {"{"}
              </span>

              <span className="code-indent">
                name: <em>"Eli Rodriguez"</em>,
              </span>

              <span className="code-indent">
                focus: <em>"Full-Stack"</em>,
              </span>

              <span className="code-indent">
                building: <em>"Web Apps"</em>
              </span>

              <span>{"};"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
