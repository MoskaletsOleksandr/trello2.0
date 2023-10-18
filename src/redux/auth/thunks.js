import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  login,
  logout,
  refresh,
  register,
  updateCurrentBoardId,
  updateTheme,
  wakeUpBackend,
} from '../../api/authApi/authApi';
import { resetBoardsState } from '../boards/slice';
import { resetCardsState } from '../cards/slice';
import { resetColumnsState } from '../columns/slice';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await register(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      await logout(body);
      dispatch(resetBoardsState());
      dispatch(resetCardsState());
      dispatch(resetColumnsState());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateThemeThunk = createAsyncThunk(
  'auth/updateTheme',
  async (theme, { rejectWithValue }) => {
    try {
      const data = await updateTheme(theme);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCurrentBoardIdThunk = createAsyncThunk(
  'auth/updateCurrentBoardId',
  async (boardId, { rejectWithValue }) => {
    try {
      const data = await updateCurrentBoardId(boardId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue }) => {
    try {
      const data = await refresh();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wakeUpBackendThunk = createAsyncThunk(
  'auth/wakeUpBackend',
  async (_, { rejectWithValue }) => {
    try {
      await wakeUpBackend();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
