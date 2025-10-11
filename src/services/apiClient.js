const API_BASE_URL = "http://localhost:3000/api";

export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      headers: { ...defaultHeaders, ...options.headers },
      ...options,
    });

    // mensaje de error
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error ${response.status}: ${errorText || response.statusText}`
      );
    }

    if (response.status === 204) return null;

    return await response.json();
  } catch (error) {
    console.error(`❌ Error en la solicitud a ${url}:`, error);
    throw error;
  }
}
