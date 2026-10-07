import { useEffect, useState } from "react";
import AuthContext from "./AuthContext.js";
import { getCurrentAdmin } from "../services/authService.js";

function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function restoreAdmin() {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getCurrentAdmin(token);
        setAdmin(data.admin);
      } catch {
        localStorage.removeItem("adminToken");
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    }

    restoreAdmin();
  }, []);

  function login(adminData, token) {
    localStorage.setItem("adminToken", token);
    setAdmin(adminData);
  }

  function logout() {
    localStorage.removeItem("adminToken");
    setAdmin(null);
  }

  const value = {
    admin,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;