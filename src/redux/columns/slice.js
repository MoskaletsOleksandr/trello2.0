import { createSlice } from '@reduxjs/toolkit';
import {
  handleColumnsThunkPending,
  handleCreateNewColumnFulfilled,
  handleDeleteColumnByIdFulfilled,
  handleGetBoardColumnsFulfilled,
  handleMoveColumnByIdFulfilled,
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
  reducers: {
    resetColumnsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoardColumnsThunk.fulfilled, handleGetBoardColumnsFulfilled)
      .addCase(getBoardColumnsThunk.pending, handleColumnsThunkPending)
      .addCase(createNewColumnThunk.fulfilled, handleCreateNewColumnFulfilled)
      .addCase(createNewColumnThunk.pending, handleColumnsThunkPending)
      .addCase(updateColumnByIdThunk.fulfilled, handleUpdateColumnByIdFulfilled)
      .addCase(updateColumnByIdThunk.pending, handleColumnsThunkPending)
      .addCase(moveColumnByIdThunk.fulfilled, handleMoveColumnByIdFulfilled)
      .addCase(moveColumnByIdThunk.pending, handleColumnsThunkPending)
      .addCase(deleteColumnByIdThunk.fulfilled, handleDeleteColumnByIdFulfilled)
      .addCase(deleteColumnByIdThunk.pending, handleColumnsThunkPending)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { resetColumnsState } = columnsSlice.actions;
