import { createSlice } from '@reduxjs/toolkit';
import {
  handleCardsThunkPending,
  handleChangePriority,
  handleCreateNewCardFulfilled,
  handleDeleteCardByIdFulfilled,
  handleGetBoardCardsFulfilled,
  handleMoveCardByIdFulfilled,
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
      .addCase(getBoardCardsThunk.pending, handleCardsThunkPending)
      .addCase(createNewCardThunk.fulfilled, handleCreateNewCardFulfilled)
      .addCase(createNewCardThunk.pending, handleCardsThunkPending)
      .addCase(updateCardByIdThunk.fulfilled, handleUpdateCardByIdFulfilled)
      .addCase(updateCardByIdThunk.pending, handleCardsThunkPending)
      .addCase(moveCardByIdThunk.fulfilled, handleMoveCardByIdFulfilled)
      .addCase(moveCardByIdThunk.pending, handleCardsThunkPending)
      .addCase(deleteCardByIdThunk.fulfilled, handleDeleteCardByIdFulfilled)
      .addCase(deleteCardByIdThunk.pending, handleCardsThunkPending)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { resetCardsState, changePriority } = cardsSlice.actions;
