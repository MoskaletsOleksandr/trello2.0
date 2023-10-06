import axios from 'axios';

const authInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/users',
});

authInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default authInstance;
