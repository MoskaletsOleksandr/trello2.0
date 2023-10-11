import { columnsInstance } from '../axiosConfig';

export const getBoardColumns = async (boardId) => {
  const { data } = await columnsInstance.get(`/${boardId}`);
  return data;
};

export const createNewColumn = async (body) => {
  const { data } = await columnsInstance.post('', body);
  return data;
};

// export const updateBoardById = async (boardId, body) => {
//   const { data } = await boardsInstance.put(`/${boardId}`, body);
//   return data;
// };

// export const deleteBoardById = async (board) => {
//   const { data } = await boardsInstance.delete(`/${board}`);
//   return data;
// };
