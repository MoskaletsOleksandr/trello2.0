import { createSlice } from '@reduxjs/toolkit';
import {
  handleCardsThunkPending,
  handleCardsThunkRejected,
  handleChangePriority,
  handleCreateNewCardFulfilled,
  handleDeleteCardByIdFulfilled,
  handleGetBoardCardsFulfilled,
  handleMoveCardByIdFulfilled,
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
      .addCase(getBoardCardsThunk.pending, handleCardsThunkPending)
      .addCase(getBoardCardsThunk.fulfilled, handleGetBoardCardsFulfilled)
      .addCase(getBoardCardsThunk.rejected, handleCardsThunkRejected)
      .addCase(createNewCardThunk.pending, handleCardsThunkPending)
      .addCase(createNewCardThunk.fulfilled, handleCreateNewCardFulfilled)
      .addCase(createNewCardThunk.rejected, handleCardsThunkRejected)
      .addCase(updateCardByIdThunk.pending, handleCardsThunkPending)
      .addCase(updateCardByIdThunk.fulfilled, handleUpdateCardByIdFulfilled)
      .addCase(updateCardByIdThunk.rejected, handleCardsThunkRejected)
      .addCase(moveCardByIdThunk.pending, handleCardsThunkPending)
      .addCase(moveCardByIdThunk.fulfilled, handleMoveCardByIdFulfilled)
      .addCase(moveCardByIdThunk.rejected, handleCardsThunkRejected)
      .addCase(deleteCardByIdThunk.pending, handleCardsThunkPending)
      .addCase(deleteCardByIdThunk.fulfilled, handleDeleteCardByIdFulfilled)
      .addCase(deleteCardByIdThunk.rejected, handleCardsThunkRejected);
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { resetCardsState, changePriority } = cardsSlice.actions;
