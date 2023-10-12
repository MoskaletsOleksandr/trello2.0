import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewCardFulfilled,
  handleGetBoardCardsFulfilled,
} from './handlers';
import { initialState } from './initialState';
import { createNewCardThunk, getBoardCardsThunk } from './thunks';

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBoardCardsThunk.fulfilled, handleGetBoardCardsFulfilled)
      .addCase(createNewCardThunk.fulfilled, handleCreateNewCardFulfilled);
    //   .addCase(updateColumnByIdThunk.fulfilled, handleUpdateColumnByIdFulfilled)
    //   .addCase(moveColumnByIdThunk.fulfilled, handleMoveColumnByIdFulfilled)
    //   .addCase(deleteColumnByIdThunk.fulfilled, handleDeleteColumnByIdFulfilled)
    //   .addMatcher(({ type }) => type.endsWith('/pending'), handleThunkPending)
    //   .addMatcher(
    //     ({ type }) => type.endsWith('/rejected'),
    //     handleThunkRejected
    //   );
  },
});

export const cardsReducer = cardsSlice.reducer;
