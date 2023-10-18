import { createSlice } from '@reduxjs/toolkit';
import {
  handleBoardsThunkPending,
  handleCreateNewBoardFulfilled,
  handleDeleteBoardByIdFulfilled,
  handleGetAllBoardsFulfilled,
  handleGetBackgroundsFulfilled,
  handleGetCurrentBoardFulfilled,
  handleThunkRejected,
  handleUpdateBoardByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewBoardThunk,
  deleteBoardByIdThunk,
  getAllBoardsThunk,
  getBackgroundsThunk,
  getCurrentBoardThunk,
  updateBoardByIdThunk,
} from './thunks';

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    resetBoardsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoardsThunk.fulfilled, handleGetAllBoardsFulfilled)
      .addCase(getAllBoardsThunk.pending, handleBoardsThunkPending)
      .addCase(getCurrentBoardThunk.fulfilled, handleGetCurrentBoardFulfilled)
      .addCase(getCurrentBoardThunk.pending, handleBoardsThunkPending)
      .addCase(createNewBoardThunk.fulfilled, handleCreateNewBoardFulfilled)
      .addCase(createNewBoardThunk.pending, handleBoardsThunkPending)
      .addCase(updateBoardByIdThunk.fulfilled, handleUpdateBoardByIdFulfilled)
      .addCase(updateBoardByIdThunk.pending, handleBoardsThunkPending)
      .addCase(deleteBoardByIdThunk.fulfilled, handleDeleteBoardByIdFulfilled)
      .addCase(deleteBoardByIdThunk.pending, handleBoardsThunkPending)
      .addCase(getBackgroundsThunk.fulfilled, handleGetBackgroundsFulfilled)
      .addCase(getBackgroundsThunk.pending, handleBoardsThunkPending)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const boardsReducer = boardSlice.reducer;
export const { resetBoardsState } = boardSlice.actions;
