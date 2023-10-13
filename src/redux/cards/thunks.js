import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewCard,
  getBoardCards,
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

// export const moveColumnByIdThunk = createAsyncThunk(
//   'columns/moveColumnById',
//   async ({ columnId, body }, { rejectWithValue }) => {
//     try {
//       const data = await moveColumnById(columnId, body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteColumnByIdThunk = createAsyncThunk(
//   'columns/deleteColumnById',
//   async (columnId, { rejectWithValue }) => {
//     try {
//       const data = await deleteColumnById(columnId);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
