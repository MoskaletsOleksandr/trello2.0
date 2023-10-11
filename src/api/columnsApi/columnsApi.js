import { columnsInstance } from '../axiosConfig';

export const getBoardColumns = async (boardId) => {
  const { data } = await columnsInstance.get(`/${boardId}`);
  return data;
};

export const createNewColumn = async (body) => {
  const { data } = await columnsInstance.post('', body);
  return data;
};

export const updateColumnById = async (body) => {
  const { data } = await columnsInstance.put('', body);
  return data;
};

// export const deleteBoardById = async (board) => {
//   const { data } = await boardsInstance.delete(`/${board}`);
//   return data;
// };
