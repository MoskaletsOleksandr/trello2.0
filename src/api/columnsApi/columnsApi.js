import { columnsInstance } from '../axiosConfig';

export const getBoardColumns = async (boardId) => {
  const { data } = await columnsInstance.get(`/${boardId}`);
  return data;
};

export const createNewColumn = async (body) => {
  const { data } = await columnsInstance.post('', body);
  return data;
};

export const updateColumnById = async (columnId, body) => {
  const { data } = await columnsInstance.put(`/${columnId}`, body);
  return data;
};

export const deleteColumnById = async (columnId) => {
  const { data } = await columnsInstance.delete(`/${columnId}`);
  return data;
};
