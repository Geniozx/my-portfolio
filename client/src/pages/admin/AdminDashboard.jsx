import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

function AdminDashboard() {
  const { admin } = useAuth();

  return (
    <main className="admin-dashboard">
      <div className="admin-page-header">
        <p className="admin-eyebrow">Dashboard</p>
        <h2>Welcome back{admin?.username ? `, ${admin.username}` : ""}.</h2>
        <p>
          Manage the projects, technologies, and messages that power your
          portfolio.
        </p>
      </div>

      <div className="admin-dashboard-grid">
        <article className="admin-dashboard-card">
          <div>
            <p className="admin-card-label">Portfolio Content</p>
            <h3>Projects</h3>
            <p>
              Create and manage the case studies displayed throughout the
              portfolio.
            </p>
          </div>

          <Link className="button button-secondary" to="/admin/projects">
            Manage Projects
          </Link>
        </article>

        <article className="admin-dashboard-card">
          <div>
            <p className="admin-card-label">Technical Skills</p>
            <h3>Technologies</h3>
            <p>
              Manage the technologies available to projects and the public
              Skills section.
            </p>
          </div>

          <Link className="button button-secondary" to="/admin/technologies">
            Manage Technologies
          </Link>
        </article>

        <article className="admin-dashboard-card">
          <div>
            <p className="admin-card-label">Communication</p>
            <h3>Messages</h3>
            <p>
              Review messages submitted through the public portfolio contact
              form.
            </p>
          </div>

          <Link className="button button-secondary" to="/admin/messages">
            View Messages
          </Link>
        </article>
      </div>
    </main>
  );
}

export default AdminDashboard;
