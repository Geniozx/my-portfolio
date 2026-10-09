function Resume() {
  return (
    <section id="resume" className="portfolio-section resume-section">
      <div className="section-container resume-grid">
        <div className="resume-heading">
          <p className="section-eyebrow">Resume</p>

          <h2>
            Experience built on
            <span> problem-solving.</span>
          </h2>

          <p>
            My professional background taught me how to work accurately,
            communicate clearly, and solve problems under real-world
            constraints. I now bring those skills into software development.
          </p>

          <a className="button button-secondary" href="#contact">
            Get In Touch
          </a>
        </div>

        <div className="resume-summary">
          <article className="resume-item">
            <span className="resume-item-number">01</span>

            <div>
              <p className="resume-item-label">Development</p>
              <h3>Full-Stack Web Development</h3>
              <p>
                Building responsive React interfaces, REST APIs, authentication
                systems, and PostgreSQL-backed applications.
              </p>
            </div>
          </article>

          <article className="resume-item">
            <span className="resume-item-number">02</span>

            <div>
              <p className="resume-item-label">Professional Background</p>
              <h3>13 Years of Pharmacy Experience</h3>
              <p>
                Developed strong habits around accuracy, responsibility,
                communication, organization, and working within detailed
                processes.
              </p>
            </div>
          </article>

          <article className="resume-item">
            <span className="resume-item-number">03</span>

            <div>
              <p className="resume-item-label">Current Focus</p>
              <h3>Building Production-Ready Applications</h3>
              <p>
                Expanding my portfolio through complete applications that solve
                practical problems for users and businesses.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Resume;
