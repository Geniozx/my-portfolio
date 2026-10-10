import { apiRequest } from "./api.js";

export async function getProjects() {
  const response = await apiRequest("/projects");

  if (!response.ok) {
    throw new Error("Unable to load projects.");
  }

  return response.json();
}


export async function getProjectBySlug(slug) {
  const response = await apiRequest(`/projects/${slug}`);

  if (!response.ok) {
    throw new Error("Unable to load project details.");
  }

  return response.json();
}