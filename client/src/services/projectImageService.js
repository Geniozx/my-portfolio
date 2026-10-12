import { apiRequest } from "./api.js";

export async function uploadProjectImage(
  projectId,
  imageData,
  token,
) {
  const response = await apiRequest(
    `/admin/projects/${projectId}/images`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: imageData,
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to upload project image.",
    );
  }

  return data;
}


export async function updateProjectImage(
  projectId,
  imageId,
  imageData,
  token,
) {
  const response = await apiRequest(
    `/admin/projects/${projectId}/images/${imageId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(imageData),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to update project image.",
    );
  }

  return data;
}


export async function deleteProjectImage(
  projectId,
  imageId,
  token,
) {
  const response = await apiRequest(
    `/admin/projects/${projectId}/images/${imageId}`,
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
      data.error || "Unable to delete project image.",
    );
  }

  return data;
}
