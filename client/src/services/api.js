const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export async function apiRequest(endpoint, options = {}) {
  const isFormData = options.body instanceof FormData;

  const headers = {
    ...options.headers,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401 && headers.Authorization) {
    window.dispatchEvent(new Event("admin-session-expired"));
  }

  return response;
}
