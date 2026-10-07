import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

function ProtectedRoute() {
  const { admin, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;