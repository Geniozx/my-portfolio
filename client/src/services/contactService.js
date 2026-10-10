import { apiRequest } from "./api";

export async function sendContactMessage(messageData) {
    const response = await apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(messageData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
    }

  return data;
}