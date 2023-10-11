import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewColumnFulfilled,
  handleGetBoardColumnsFulfilled,
} from './handlers';
import { initialState } from './initialState';
import { createNewColumnThunk, getBoardColumnsThunk } from './thunks';

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBoardColumnsThunk.fulfilled, handleGetBoardColumnsFulfilled)
      .addCase(createNewColumnThunk.fulfilled, handleCreateNewColumnFulfilled);
    //   .addCase(updateBoardByIdThunk.fulfilled, handleUpdateBoardByIdFulfilled)
    //   .addCase(deleteBoardByIdThunk.fulfilled, handleDeleteBoardByIdFulfilled)
  },
});

export const columnsReducer = columnsSlice.reducer;
