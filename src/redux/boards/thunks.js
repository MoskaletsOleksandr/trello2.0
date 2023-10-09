import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoard,
  getAllBoards,
  getCurrentBoard,
} from '../../api/boardsApi/boardsApi';

export const getAllBoardsThunk = createAsyncThunk(
  'boards/getAllBoards',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllBoards();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentBoardThunk = createAsyncThunk(
  'boards/getCurrentBoard',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getCurrentBoard(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewBoardThunk = createAsyncThunk(
  'boards/createNewBoard',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await createNewBoard(body);
      dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
