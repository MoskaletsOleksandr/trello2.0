import { cardsInstance } from '../axiosConfig';

export const getBoardCards = async (boardId) => {
  const { data } = await cardsInstance.get(`/${boardId}`);
  return data;
};

export const createNewCard = async (body) => {
  const { data } = await cardsInstance.post('', body);
  return data;
};

export const updateCardById = async (cardId, body) => {
  const { data } = await cardsInstance.put(`/update/${cardId}`, body);
  return data;
};

export const moveCardById = async (cardId, body) => {
  const { data } = await cardsInstance.patch(`/move/${cardId}`, body);
  return data;
};

export const deleteCardById = async (cardId) => {
  const { data } = await cardsInstance.delete(`/${cardId}`);
  return data;
};
