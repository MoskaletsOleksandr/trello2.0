import { authInstance, refreshInstance } from '../axiosConfig';

export const register = async (body) => {
  const { data } = await authInstance.post('/register', body);
  localStorage.setItem('deviceId', data.deviceId);
  localStorage.setItem('token', data.accessToken);
  return data;
};

export const login = async (body) => {
  const { data } = await authInstance.post('/login', body);
  localStorage.setItem('deviceId', data.deviceId);
  localStorage.setItem('token', data.accessToken);
  return data;
};

export const logout = async () => {
  await authInstance.post('/logout');
  localStorage.removeItem('deviceId');
  localStorage.removeItem('token');
};

export const refresh = async () => {
  const { data } = await refreshInstance.get();
  return data;
};

export const updateTheme = async (theme) => {
  const { data } = await authInstance.patch('/theme', theme);
  return data;
};

export const updateCurrentBoardId = async (boardId) => {
  const { data } = await authInstance.patch('/board', boardId);
  return data;
};
