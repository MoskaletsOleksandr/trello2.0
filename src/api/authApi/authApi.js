import { authInstance, refreshInstance } from '../axiosConfig';

export const register = async (body) => {
  const { data } = await authInstance.post('/register', body);
  localStorage.setItem('token', data.accessToken);
  return data;
};

export const login = async (body) => {
  const { data } = await authInstance.post('/login', body);
  localStorage.setItem('token', data.accessToken);
  return data;
};

export const logout = async () => {
  await authInstance.post('/logout');
  localStorage.removeItem('token');
};

export const refresh = async () => {
  const { data } = await refreshInstance.get();
  return data;
};

export const updateTheme = async (theme) => {
  const { data } = await authInstance.patch('theme', theme);
  return data;
};
