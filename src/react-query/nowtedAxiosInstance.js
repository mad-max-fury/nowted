import axios from "axios";

// Create an instance of Axios with custom configurations
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1/", // Set the base URL for all requests
  headers: {
    "Content-Type": "application/json", // Set the default Content-Type header
    // Add any other headers you need
  },
});

// Optionally, you can intercept requests or responses and modify them
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config if needed
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data if needed
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
