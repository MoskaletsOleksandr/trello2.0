import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoard,
  getAllBoards,
  getBackgrounds,
  getCurrentBoard,
} from '../../api/boardsApi/boardsApi';
import { updateCurrentBoardIdThunk } from '../auth/thunks';

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
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await getCurrentBoard(id);
      await dispatch(updateCurrentBoardIdThunk({ boardId: id }));
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
      await dispatch(getAllBoardsThunk());
      await dispatch(updateCurrentBoardIdThunk({ boardId: data._id }));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBackgroundsThunk = createAsyncThunk(
  'boards/getBackgrounds',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getBackgrounds();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
