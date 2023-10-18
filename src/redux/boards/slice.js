import { createSlice } from '@reduxjs/toolkit';
import {
  handleBoardsThunkPending,
  handleBoardsThunkRejected,
  handleCreateNewBoardFulfilled,
  handleDeleteBoardByIdFulfilled,
  handleGetAllBoardsFulfilled,
  handleGetBackgroundsFulfilled,
  handleGetCurrentBoardFulfilled,
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
      .addCase(getAllBoardsThunk.pending, handleBoardsThunkPending)
      .addCase(getAllBoardsThunk.fulfilled, handleGetAllBoardsFulfilled)
      .addCase(getAllBoardsThunk.rejected, handleBoardsThunkRejected)
      .addCase(getCurrentBoardThunk.pending, handleBoardsThunkPending)
      .addCase(getCurrentBoardThunk.fulfilled, handleGetCurrentBoardFulfilled)
      .addCase(getCurrentBoardThunk.rejected, handleBoardsThunkRejected)
      .addCase(createNewBoardThunk.pending, handleBoardsThunkPending)
      .addCase(createNewBoardThunk.fulfilled, handleCreateNewBoardFulfilled)
      .addCase(createNewBoardThunk.rejected, handleBoardsThunkRejected)
      .addCase(updateBoardByIdThunk.pending, handleBoardsThunkPending)
      .addCase(updateBoardByIdThunk.fulfilled, handleUpdateBoardByIdFulfilled)
      .addCase(updateBoardByIdThunk.rejected, handleBoardsThunkRejected)
      .addCase(deleteBoardByIdThunk.pending, handleBoardsThunkPending)
      .addCase(deleteBoardByIdThunk.fulfilled, handleDeleteBoardByIdFulfilled)
      .addCase(deleteBoardByIdThunk.rejected, handleBoardsThunkRejected)
      .addCase(getBackgroundsThunk.pending, handleBoardsThunkPending)
      .addCase(getBackgroundsThunk.fulfilled, handleGetBackgroundsFulfilled)
      .addCase(getBackgroundsThunk.rejected, handleBoardsThunkRejected);
  },
});

export const boardsReducer = boardSlice.reducer;
export const { resetBoardsState } = boardSlice.actions;
