import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <div className="admin-layout">
      <header>
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
      </header>

      <Outlet />
    </div>
  );
}

export default AdminLayout;