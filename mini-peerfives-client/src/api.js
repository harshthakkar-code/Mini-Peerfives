import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Change if your backend URL is different

export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const fetchUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const createUser = (data) => axios.post(`${API_URL}/users`, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

export const fetchP5History = (userId) => axios.get(`${API_URL}/rewards/${userId}`);
export const createReward = (userId, data) => axios.post(`${API_URL}/rewards/${userId}`, data);
export const deleteReward = (rewardId) => axios.delete(`${API_URL}/rewards/${rewardId}`);