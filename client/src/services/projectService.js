import { apiRequest } from "./api.js";

export async function getProjects() {
  const response = await apiRequest("/projects");

  if (!response.ok) {
    throw new Error("Unable to load projects.");
  }

  return response.json();
}