import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com/users',
});

export const setToken = (accessToken) => {
  authInstance.defaults.headers.common['Authorization'] = accessToken;
};

export const clearToken = () => {
  authInstance.defaults.headers.common['Authorization'] = '';
};
