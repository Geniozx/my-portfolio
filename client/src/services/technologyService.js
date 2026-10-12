import { apiRequest } from "./api.js";

export async function getTechnologies() {
  const response = await apiRequest("/technologies");

  if (!response.ok) {
    throw new Error("Unable to load technologies.");
  }

  return response.json();
}

export async function getAdminTechnologies(token) {
  const response = await apiRequest("/admin/technologies", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load admin technologies.");
  }

  return response.json();
}


export async function createTechnology(technologyData, token) {
  const response = await apiRequest("/admin/technologies", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(technologyData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to create technology.",
    );
  }

  return data;
}


export async function updateTechnology(
  id,
  technologyData,
  token,
) {
  const response = await apiRequest(
    `/admin/technologies/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(technologyData),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to update technology.",
    );
  }

  return data;
}


export async function deleteTechnology(id, token) {
  const response = await apiRequest(
    `/admin/technologies/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to delete technology.",
    );
  }

  return data;
}
