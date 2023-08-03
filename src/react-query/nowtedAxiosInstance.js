import axios from "axios";
import { getUser } from "./auth/user.localstore";

const axiosInstance = axios.create({
  baseURL: "https://nowted-api.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to update the Authorization header dynamically
const updateAuthorizationHeader = () => {
  const user = getUser();
  const token = user?.data?.token;
  if (token) {
    axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers["Authorization"];
  }
};

// Call the updateAuthorizationHeader initially
updateAuthorizationHeader();

// Intercept requests and modify the headers
axiosInstance.interceptors.request.use(
  (config) => {
    updateAuthorizationHeader(); // Call the updateAuthorizationHeader before each request
    return config;
  },
  (error) => {
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
