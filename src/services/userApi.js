import axios from "axios";

const BASE_URL = "https://dummyjson.com";

// Get all users
export const getTodos = () => {
    return axios.get(`${BASE_URL}/users`)
        .then(response => response.data.users)
        .catch(error => {
            console.error("Error fetching todos:", error);
            throw error;
        });
};

// Get user by ID
export const getTodoById = (id) => {
    return axios.get(`${BASE_URL}/users/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching todo:", error);
            throw error;
        });
};

// Create new user
export const createTodo = (userData) => {
    return axios.post(`${BASE_URL}/users/add`, userData)
        .then(response => response.data)
        .catch(error => {
            console.error("Error creating todo:", error);
            throw error;
        });
};

// Update user
export const updateTodo = (id, userData) => {
    return axios.put(`${BASE_URL}/users/${id}`, userData)
        .then(response => response.data)
        .catch(error => {
            console.error("Error updating todo:", error);
            throw error;
        });
};

// Delete user
export const deleteTodo = (id) => {
    return axios.delete(`${BASE_URL}/users/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error deleting todo:", error);
            throw error;
        });
};
