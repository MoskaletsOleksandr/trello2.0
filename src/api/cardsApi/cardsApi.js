import { cardsInstance } from '../axiosConfig';

export const getBoardCards = async (boardId) => {
  try {
    const { data } = await cardsInstance.get(`/${boardId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createNewCard = async (body) => {
  try {
    const { data } = await cardsInstance.post('', body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateCardById = async (cardId, body) => {
  try {
    const { data } = await cardsInstance.put(`/update/${cardId}`, body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const moveCardById = async (cardId, body) => {
  try {
    const { data } = await cardsInstance.patch(`/move/${cardId}`, body);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteCardById = async (cardId) => {
  try {
    const { data } = await cardsInstance.delete(`/${cardId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
