import { useEffect, useState } from "react";
import { apiRequest } from "../services/api.js";

function Home() {
  const [apiStatus, setApiStatus] = useState("Checking API...");

  useEffect(() => {
    async function checkApi() {
      try {
        const response = await apiRequest("/health");

        if (!response.ok) {
          throw new Error("API health check failed.");
        }

        const data = await response.json();

        setApiStatus(data.status);
      } catch {
        setApiStatus("Unable to connect to API.");
      }
    }

    checkApi();
  }, []);

  return (
    <main>
      <h1>Eli Rodriguez</h1>
      <p>Full-Stack Web Developer</p>
      <p>API Status: {apiStatus}</p>
    </main>
  );
}

export default Home;