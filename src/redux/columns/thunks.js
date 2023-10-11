import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createNewColumn,
  getBoardColumns,
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
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await createNewColumn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const updateBoardByIdThunk = createAsyncThunk(
//   'boards/updateBoardById',
//   async ({ boardId, body }, { rejectWithValue, dispatch }) => {
//     console.log(boardId, body);
//     try {
//       const data = await updateBoardById(boardId, body);
//       await dispatch(getAllBoardsThunk());
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
