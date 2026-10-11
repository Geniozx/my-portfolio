import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

function AdminLayout() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <p className="admin-eyebrow">Portfolio CMS</p>
          <h1>Admin</h1>
        </div>

        <nav className="admin-nav" aria-label="Admin navigation">
          <NavLink to="/admin" end>
            Dashboard
          </NavLink>

          <NavLink to="/admin/projects">
            Projects
          </NavLink>

          <NavLink to="/admin/technologies">
            Technologies
          </NavLink>

          <NavLink to="/admin/messages">
            Messages
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          {admin?.username && (
            <p className="admin-user">
              Signed in as <strong>{admin.username}</strong>
            </p>
          )}

          <button
            className="button button-secondary"
            type="button"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </aside>

      <div className="admin-content">
        <header className="admin-topbar">
          <a href="/" target="_blank" rel="noopener noreferrer">
            View Portfolio
          </a>
        </header>

        <div className="admin-page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
