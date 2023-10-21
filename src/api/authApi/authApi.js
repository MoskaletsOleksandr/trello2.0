import { authInstance, refreshInstance } from '../axiosConfig';

export const register = async (body) => {
  try {
    const { data } = await authInstance.post('/register', body);
    localStorage.setItem('deviceId', data.deviceId);
    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const login = async (body) => {
  try {
    const { data } = await authInstance.post('/login', body);
    localStorage.setItem('deviceId', data.deviceId);
    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const logout = async () => {
  try {
    await authInstance.post('/logout');
    localStorage.removeItem('deviceId');
    localStorage.removeItem('token');
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const refresh = async () => {
  try {
    const { data } = await refreshInstance.get();
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateTheme = async (theme) => {
  try {
    const { data } = await authInstance.patch('/theme', theme);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateCurrentBoardId = async (boardId) => {
  try {
    const { data } = await authInstance.patch('/board', boardId);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateUser = async (formData) => {
  try {
    const { data } = await authInstance.put('/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const wakeUpBackend = async () => {
  try {
    await authInstance.get('/wakeUp');
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
