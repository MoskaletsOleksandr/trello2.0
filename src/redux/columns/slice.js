import { createSlice } from '@reduxjs/toolkit';
import {
  handleColumnsThunkPending,
  handleColumnsThunkRejected,
  handleCreateNewColumnFulfilled,
  handleDeleteColumnByIdFulfilled,
  handleGetBoardColumnsFulfilled,
  handleMoveColumnByIdFulfilled,
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
      .addCase(getBoardColumnsThunk.pending, handleColumnsThunkPending)
      .addCase(getBoardColumnsThunk.fulfilled, handleGetBoardColumnsFulfilled)
      .addCase(getBoardColumnsThunk.rejected, handleColumnsThunkRejected)
      .addCase(createNewColumnThunk.pending, handleColumnsThunkPending)
      .addCase(createNewColumnThunk.fulfilled, handleCreateNewColumnFulfilled)
      .addCase(createNewColumnThunk.rejected, handleColumnsThunkRejected)
      .addCase(updateColumnByIdThunk.pending, handleColumnsThunkPending)
      .addCase(updateColumnByIdThunk.fulfilled, handleUpdateColumnByIdFulfilled)
      .addCase(updateColumnByIdThunk.rejected, handleColumnsThunkRejected)
      .addCase(moveColumnByIdThunk.pending, handleColumnsThunkPending)
      .addCase(moveColumnByIdThunk.fulfilled, handleMoveColumnByIdFulfilled)
      .addCase(moveColumnByIdThunk.rejected, handleColumnsThunkRejected)
      .addCase(deleteColumnByIdThunk.pending, handleColumnsThunkPending)
      .addCase(deleteColumnByIdThunk.fulfilled, handleDeleteColumnByIdFulfilled)
      .addCase(deleteColumnByIdThunk.rejected, handleColumnsThunkRejected);
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { resetColumnsState } = columnsSlice.actions;
