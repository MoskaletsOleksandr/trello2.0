import { columnsInstance } from '../axiosConfig';

export const getBoardColumns = async (boardId) => {
  try {
    const { data } = await columnsInstance.get(`/${boardId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createNewColumn = async (body) => {
  try {
    const { data } = await columnsInstance.post('', body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateColumnById = async (columnId, body) => {
  try {
    const { data } = await columnsInstance.patch(`/update/${columnId}`, body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const moveColumnById = async (columnId, body) => {
  try {
    const { data } = await columnsInstance.patch(`/move/${columnId}`, body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteColumnById = async (columnId) => {
  try {
    const { data } = await columnsInstance.delete(`/${columnId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
