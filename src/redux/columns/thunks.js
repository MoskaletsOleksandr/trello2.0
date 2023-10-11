import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewColumn,
  getBoardColumns,
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
  async (body, { rejectWithValue }) => {
    try {
      const data = await updateColumnById(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const deleteBoardByIdThunk = createAsyncThunk(
//   'boards/deleteBoardById',
//   async (boardId, { rejectWithValue, dispatch }) => {
//     try {
//       await deleteBoardById(boardId);
//       await dispatch(getAllBoardsThunk());
//       await dispatch(updateCurrentBoardIdThunk({ boardId: null }));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
