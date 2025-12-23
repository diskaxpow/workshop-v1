import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authApi = {
  login: (credentials) => {
    return api
      .post("/auth/login", credentials)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error logging in:", error);
        throw error;
      });
  },

  register: (userData) => {
    return api
      .post("/auth/register", userData)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error registering:", error);
        throw error;
      });
  },

  logout: () => {
    return api
      .post("/auth/logout")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error logging out:", error);
        throw error;
      });
  },
};

// User APIs
export const userApi = {
  // Get all users
  getUsers: (params = {}) => {
    return api
      .get("/users", { params })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching users:", error);
        throw error;
      });
  },

  // Get user by ID
  getUserById: (id) => {
    return api
      .get(`/users/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching user:", error);
        throw error;
      });
  },

  // Create new user
  createUser: (userData) => {
    return api
      .post("/users", userData)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error creating user:", error);
        throw error;
      });
  },

  // Update user
  updateUser: (id, userData) => {
    return api
      .put(`/users/${id}`, userData)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error updating user:", error);
        throw error;
      });
  },

  // Delete user
  deleteUser: (id) => {
    return api
      .delete(`/users/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error deleting user:", error);
        throw error;
      });
  },
};

// Export legacy functions for backward compatibility
export const getTodos = userApi.getUsers;
export const getTodoById = userApi.getUserById;
export const createTodo = userApi.createUser;
export const updateTodo = userApi.updateUser;
export const deleteTodo = userApi.deleteUser;

export default api;
