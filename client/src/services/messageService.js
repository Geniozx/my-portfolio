import { apiRequest } from "./api.js";

export async function getAdminMessages(token) {
  const response = await apiRequest("/admin/messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to load contact messages.",
    );
  }

  return data;
}

export async function getAdminMessageById(id, token) {
  const response = await apiRequest(
    `/admin/messages/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to load contact message.",
    );
  }

  return data;
}

export async function updateAdminMessage(
  id,
  messageData,
  token,
) {
  const response = await apiRequest(
    `/admin/messages/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(messageData),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to update contact message.",
    );
  }

  return data;
}

export async function deleteAdminMessage(id, token) {
  const response = await apiRequest(
    `/admin/messages/${id}`,
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
      data.error || "Unable to delete contact message.",
    );
  }

  return data;
}
