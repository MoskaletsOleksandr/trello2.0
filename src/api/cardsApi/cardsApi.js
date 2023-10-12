import { cardsInstance } from '../axiosConfig';

export const getBoardCards = async (boardId) => {
  const { data } = await cardsInstance.get(`/${boardId}`);
  return data;
};

export const createNewCard = async (body) => {
  const { data } = await cardsInstance.post('', body);
  return data;
};

// export const updateColumnById = async (columnId, body) => {
//   const { data } = await columnsInstance.patch(`/update/${columnId}`, body);
//   return data;
// };

// export const moveColumnById = async (columnId, body) => {
//   const { data } = await columnsInstance.patch(`/move/${columnId}`, body);
//   return data;
// };

// export const deleteColumnById = async (columnId) => {
//   const { data } = await columnsInstance.delete(`/${columnId}`);
//   return data;
// };
