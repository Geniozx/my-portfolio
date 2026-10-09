function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Back to home">
            ER
          </a>

          <div>
            <p>Eli Rodriguez</p>
            <span>Full-Stack Web Developer</span>
          </div>
        </div>

        <p className="footer-copyright">
          &copy; {currentYear} Eli Rodriguez. All rights reserved.
        </p>

        <a href="#home" className="footer-back-to-top">
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;