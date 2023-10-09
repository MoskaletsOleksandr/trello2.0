import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  login,
  logout,
  refresh,
  register,
  updateTheme,
} from '../../api/authApi/authApi';

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
  async (body, { rejectWithValue }) => {
    try {
      await logout(body);
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
