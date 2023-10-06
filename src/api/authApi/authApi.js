import authInstance from '../axiosConfig';

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
  const { data } = await authInstance.get('/refresh');
  return data;
};

// export const getCurrent = async () => {
//   const { data } = await authInstance.get('/current');
//   return data;
// };

export const fetchUsers = async () => {
  const { data } = await authInstance.get('/users');
  return data;
};
