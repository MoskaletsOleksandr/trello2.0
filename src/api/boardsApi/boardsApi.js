import { boardsInstance } from '../axiosConfig';

export const getAllBoards = async () => {
  try {
    const { data } = await boardsInstance.get();
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getCurrentBoard = async (id) => {
  try {
    const { data } = await boardsInstance.get(`/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createNewBoard = async (body) => {
  try {
    const { data } = await boardsInstance.post('', body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateBoardById = async (boardId, body) => {
  try {
    const { data } = await boardsInstance.put(`/${boardId}`, body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteBoardById = async (boardId) => {
  try {
    const { data } = await boardsInstance.delete(`/${boardId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getBackgrounds = async () => {
  try {
    const { data } = await boardsInstance.get(`/backgrounds`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
