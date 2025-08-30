import axios, { AxiosError, type AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api", // URL base
  timeout: 10000, // 10 segundos de espera
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Interceptor de requests (antes de enviar)
axiosClient.interceptors.request.use(
  (config) => {
    // Si tienes auth, puedes añadir el token aquí
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Interceptor de responses (después de recibir)
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Manejo de errores globales
    if (error.response) {
      console.error("Error en respuesta:", error.response.data);
    } else if (error.request) {
      console.error("No hubo respuesta del servidor:", error.request);
    } else {
      console.error("Error de configuración:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
