import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewColumnFulfilled,
  handleDeleteColumnByIdFulfilled,
  handleGetBoardColumnsFulfilled,
  handleMoveColumnByIdFulfilled,
  handleThunkPending,
  handleThunkRejected,
  handleUpdateColumnByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewColumnThunk,
  deleteColumnByIdThunk,
  getBoardColumnsThunk,
  moveColumnByIdThunk,
  updateColumnByIdThunk,
} from './thunks';

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBoardColumnsThunk.fulfilled, handleGetBoardColumnsFulfilled)
      .addCase(createNewColumnThunk.fulfilled, handleCreateNewColumnFulfilled)
      .addCase(updateColumnByIdThunk.fulfilled, handleUpdateColumnByIdFulfilled)
      .addCase(moveColumnByIdThunk.fulfilled, handleMoveColumnByIdFulfilled)
      .addCase(deleteColumnByIdThunk.fulfilled, handleDeleteColumnByIdFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handleThunkPending)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const columnsReducer = columnsSlice.reducer;
