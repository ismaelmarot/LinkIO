import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  try {
    const clerk = (window as any).Clerk;
    const token = await clerk?.session?.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("[API Interceptor] Token attached to request");
    } else {
      console.log("[API Interceptor] No token found");
    }
  } catch (error) {
    console.error("[API Interceptor] Error getting token:", error);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      error.isNetworkError = true;
    }
    console.error("[API Interceptor] Response error:", error);
    return Promise.reject(error);
  }
);

export default api;
