import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewColumnFulfilled,
  handleDeleteColumnByIdFulfilled,
  handleGetBoardColumnsFulfilled,
  handleUpdateColumnByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewColumnThunk,
  deleteColumnByIdThunk,
  getBoardColumnsThunk,
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
      .addCase(
        deleteColumnByIdThunk.fulfilled,
        handleDeleteColumnByIdFulfilled
      );
  },
});

export const columnsReducer = columnsSlice.reducer;
