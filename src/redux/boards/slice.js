import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewBoardFulfilled,
  handleGetAllBoardsFulfilled,
  handleGetBackgroundsFulfilled,
  handleGetCurrentBoardFulfilled,
  handleUpdateBoardByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewBoardThunk,
  getAllBoardsThunk,
  getBackgroundsThunk,
  getCurrentBoardThunk,
  updateBoardByIdThunk,
} from './thunks';

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoardsThunk.fulfilled, handleGetAllBoardsFulfilled)
      .addCase(getCurrentBoardThunk.fulfilled, handleGetCurrentBoardFulfilled)
      .addCase(createNewBoardThunk.fulfilled, handleCreateNewBoardFulfilled)
      .addCase(updateBoardByIdThunk.fulfilled, handleUpdateBoardByIdFulfilled)
      .addCase(getBackgroundsThunk.fulfilled, handleGetBackgroundsFulfilled);
  },
});

export const boardsReducer = boardSlice.reducer;
