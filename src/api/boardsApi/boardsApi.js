import { boardsInstance } from '../axiosConfig';

export const getAllBoards = async () => {
  const { data } = await boardsInstance.get();
  return data;
};

export const getCurrentBoard = async (id) => {
  const { data } = await boardsInstance.get(`/${id}`);
  return data;
};

export const createNewBoard = async (body) => {
  const { data } = await boardsInstance.post('', body);
  return data;
};

export const updateBoardById = async (boardId, body) => {
  const { data } = await boardsInstance.put(`/${boardId}`, body);
  return data;
};

export const deleteBoardById = async (id) => {
  const { data } = await boardsInstance.delete(`/${id}`);
  return data;
};

export const getBackgrounds = async () => {
  const { data } = await boardsInstance.get(`/backgrounds`);
  return data;
};
