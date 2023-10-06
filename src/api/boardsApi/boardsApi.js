import { boardsInstance } from '../axiosConfig';

export const fetchBoards = async () => {
  const { data } = await boardsInstance.get();
  return data;
};

export const createNewBoard = async (body) => {
  const { data } = await boardsInstance.post('', body);
  return data;
};
