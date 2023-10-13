import { createSlice } from '@reduxjs/toolkit';
import {
  handleCreateNewCardFulfilled,
  handleGetBoardCardsFulfilled,
  handleUpdateCardByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewCardThunk,
  getBoardCardsThunk,
  updateCardByIdThunk,
} from './thunks';

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    resetCardsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoardCardsThunk.fulfilled, handleGetBoardCardsFulfilled)
      .addCase(createNewCardThunk.fulfilled, handleCreateNewCardFulfilled)
      .addCase(updateCardByIdThunk.fulfilled, handleUpdateCardByIdFulfilled);
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
export const { resetCardsState } = cardsSlice.actions;
