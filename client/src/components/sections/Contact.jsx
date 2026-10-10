import { useState } from "react";

import { sendContactMessage } from "../../services/contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await sendContactMessage(formData);

      setSubmitSuccess("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSubmitting(false);
    }
  }


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

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell me a little about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {submitError && (
              <p className="form-message form-message-error" role="alert">
                {submitError}
              </p>
            )}

            {submitSuccess && (
              <p className="form-message form-message-success" role="status">
                {submitSuccess}
              </p>
            )}

            <button
              className="button button-primary"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
