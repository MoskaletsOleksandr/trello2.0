import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewCard,
  deleteCardById,
  getBoardCards,
  moveCardById,
  updateCardById,
} from '../../api/cardsApi/cardsApi';

export const getBoardCardsThunk = createAsyncThunk(
  'cards/getBoardCards',
  async (boardId, { rejectWithValue }) => {
    try {
      const data = await getBoardCards(boardId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewCardThunk = createAsyncThunk(
  'cards/createNewCard',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createNewCard(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCardByIdThunk = createAsyncThunk(
  'cards/updateCardById',
  async ({ cardId, body }, { rejectWithValue }) => {
    try {
      const data = await updateCardById(cardId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const moveCardByIdThunk = createAsyncThunk(
  'cards/moveCardById',
  async ({ cardId, body }, { rejectWithValue }) => {
    try {
      const data = await moveCardById(cardId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCardByIdThunk = createAsyncThunk(
  'cards/deleteCardById',
  async (cardId, { rejectWithValue }) => {
    try {
      const data = await deleteCardById(cardId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
