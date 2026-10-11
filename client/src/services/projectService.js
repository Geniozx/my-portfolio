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


export async function getAdminProjects(token) {
  const response = await apiRequest("/admin/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load admin projects.");
  }

  return response.json();
}


export async function getAdminProjectById(id, token) {
  const response = await apiRequest(`/admin/projects/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load project.");
  }

  return response.json();
}


export async function createProject(projectData, token) {
  const response = await apiRequest("/admin/projects", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to create project.");
  }

  return data;
}


export async function updateProject(id, projectData, token) {
  const response = await apiRequest(`/admin/projects/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to update project.");
  }

  return data;
}


export async function deleteProject(id, token) {
  const response = await apiRequest(`/admin/projects/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to delete project.");
  }

  return data;
}


export async function updateProjectTechnologies(
  id,
  technologyIds,
  token,
) {
  const response = await apiRequest(
    `/admin/projects/${id}/technologies`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        technology_ids: technologyIds,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to update project technologies.",
    );
  }

  return data;
}