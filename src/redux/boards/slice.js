import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewBoardFulfilled,
  handleGetAllBoardsFulfilled,
  handleGetCurrentBoardFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewBoardThunk,
  getAllBoardsThunk,
  getCurrentBoardThunk,
} from './thunks';

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoardsThunk.fulfilled, handleGetAllBoardsFulfilled)
      .addCase(getCurrentBoardThunk.fulfilled, handleGetCurrentBoardFulfilled)
      .addCase(createNewBoardThunk.fulfilled, handleCreateNewBoardFulfilled);
  },
});

export const boardsReducer = boardSlice.reducer;
