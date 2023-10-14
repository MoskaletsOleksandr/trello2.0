import { createSlice } from '@reduxjs/toolkit';
import {
  handleChangePriority,
  handleCreateNewCardFulfilled,
  handleDeleteCardByIdFulfilled,
  handleGetBoardCardsFulfilled,
  handleMoveCardByIdFulfilled,
  handleThunkPending,
  handleThunkRejected,
  handleUpdateCardByIdFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  createNewCardThunk,
  deleteCardByIdThunk,
  getBoardCardsThunk,
  moveCardByIdThunk,
  updateCardByIdThunk,
} from './thunks';

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    resetCardsState: () => initialState,
    changePriority: handleChangePriority,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoardCardsThunk.fulfilled, handleGetBoardCardsFulfilled)
      .addCase(createNewCardThunk.fulfilled, handleCreateNewCardFulfilled)
      .addCase(updateCardByIdThunk.fulfilled, handleUpdateCardByIdFulfilled)
      .addCase(moveCardByIdThunk.fulfilled, handleMoveCardByIdFulfilled)
      .addCase(deleteCardByIdThunk.fulfilled, handleDeleteCardByIdFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handleThunkPending)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { resetCardsState, changePriority } = cardsSlice.actions;
