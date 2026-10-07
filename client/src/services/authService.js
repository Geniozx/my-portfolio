import { apiRequest } from "./api.js";

export async function loginAdmin(credentials) {
  const response = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Invalid username or password.");
  }

  return response.json();
}

export async function getCurrentAdmin(token) {
  const response = await apiRequest("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to authenticate administrator.");
  }

  return response.json();
}