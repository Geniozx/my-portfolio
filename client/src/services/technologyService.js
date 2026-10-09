import { apiRequest } from "./api.js";

export async function getTechnologies() {
  const response = await apiRequest("/technologies");

  if (!response.ok) {
    throw new Error("Unable to load technologies.");
  }

  return response.json();
}