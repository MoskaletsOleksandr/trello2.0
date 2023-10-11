import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewColumnFulfilled,
  handleGetBoardColumnsFulfilled,
  handleUpdateColumnByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewColumnThunk,
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
      .addCase(
        updateColumnByIdThunk.fulfilled,
        handleUpdateColumnByIdFulfilled
      );
    //   .addCase(deleteBoardByIdThunk.fulfilled, handleDeleteBoardByIdFulfilled)
  },
});

export const columnsReducer = columnsSlice.reducer;
