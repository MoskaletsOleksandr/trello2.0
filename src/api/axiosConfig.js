import axios from 'axios';

export const refreshInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/users/refresh',
});

export const authInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/users',
});

export const boardsInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/boards',
});

authInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

boardsInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

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
