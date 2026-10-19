import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer.jsx";
import Navbar from "../layout/Navbar.jsx";

function PublicLayout() {
  return (
    <div className="public-layout">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default PublicLayout;