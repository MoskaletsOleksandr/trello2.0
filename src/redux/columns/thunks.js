import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewColumn,
  deleteColumnById,
  getBoardColumns,
  moveColumnById,
  updateColumnById,
} from '../../api/columnsApi/columnsApi';

export const getBoardColumnsThunk = createAsyncThunk(
  'columns/getBoardColumns',
  async (boardId, { rejectWithValue }) => {
    try {
      const data = await getBoardColumns(boardId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createNewColumnThunk = createAsyncThunk(
  'columns/createNewColumn',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createNewColumn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateColumnByIdThunk = createAsyncThunk(
  'columns/updateColumnById',
  async ({ columnId, body }, { rejectWithValue }) => {
    try {
      const data = await updateColumnById(columnId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const moveColumnByIdThunk = createAsyncThunk(
  'columns/moveColumnById',
  async ({ columnId, body }, { rejectWithValue }) => {
    try {
      const data = await moveColumnById(columnId, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteColumnByIdThunk = createAsyncThunk(
  'columns/deleteColumnById',
  async (columnId, { rejectWithValue }) => {
    try {
      const data = await deleteColumnById(columnId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
