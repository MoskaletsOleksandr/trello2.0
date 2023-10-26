import axios from 'axios';

const baseURL = 'https://trello2-0-backend.onrender.com';
// const baseURL = 'http://localhost:5000';

export const refreshInstance = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}/users/refresh`,
});

export const authInstance = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}/users`,
});

export const boardsInstance = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}/boards`,
});

export const columnsInstance = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}/columns`,
});

export const cardsInstance = axios.create({
  withCredentials: true,
  baseURL: `${baseURL}/cards`,
});

authInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.headers['X-Device-Id'] = localStorage.getItem('deviceId');
  return config;
});

boardsInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

columnsInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

cardsInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

refreshInstance.interceptors.request.use((config) => {
  config.headers['X-Device-Id'] = localStorage.getItem('deviceId');
  return config;
});

authInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await refreshInstance.get();
        localStorage.setItem('token', data.accessToken);
        return authInstance.request(originalRequest);
      } catch (error) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);

boardsInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await refreshInstance.get();
        localStorage.setItem('token', data.accessToken);
        return boardsInstance.request(originalRequest);
      } catch (error) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);

columnsInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await refreshInstance.get();
        localStorage.setItem('token', data.accessToken);
        return columnsInstance.request(originalRequest);
      } catch (error) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);

cardsInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await refreshInstance.get();
        localStorage.setItem('token', data.accessToken);
        return cardsInstance.request(originalRequest);
      } catch (error) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);
