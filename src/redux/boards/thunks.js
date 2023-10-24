import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewBoard,
  deleteBoardById,
  getAllBoards,
  getBackgrounds,
  getCurrentBoard,
  updateBoardById,
} from '../../api/boardsApi/boardsApi';
import { updateCurrentBoardIdThunk } from '../auth/thunks';
import { getBoardCardsThunk } from '../cards/thunks';
import { getBoardColumnsThunk } from '../columns/thunks';

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
      await dispatch(getBoardColumnsThunk(id));
      await dispatch(getBoardCardsThunk(id));
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
      await dispatch(getBoardColumnsThunk(data._id));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBoardByIdThunk = createAsyncThunk(
  'boards/updateBoardById',
  async ({ boardId, body }, { rejectWithValue, dispatch }) => {
    try {
      const data = await updateBoardById(boardId, body);
      await dispatch(getAllBoardsThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoardByIdThunk = createAsyncThunk(
  'boards/deleteBoardById',
  async (boardId, { rejectWithValue, dispatch }) => {
    try {
      await deleteBoardById(boardId);
      await dispatch(getAllBoardsThunk());
      await dispatch(updateCurrentBoardIdThunk({ boardId: null }));
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
