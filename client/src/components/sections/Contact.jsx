function Contact() {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="section-eyebrow">Contact</p>

            <h2>
              Have an idea?
              <span> Let's build something.</span>
            </h2>

            <p>
              I'm interested in opportunities to build useful web
              applications, collaborate on projects, and work with businesses
              that need a strong web presence.
            </p>

            <div className="contact-note">
              <span className="contact-note-marker" />

              <p>
                Open to development opportunities, freelance projects, and
                client work.
              </p>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell me a little about your project or opportunity..."
              />
            </div>

            <button className="button button-primary" type="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;