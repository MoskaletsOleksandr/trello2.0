export const handleGetBoardCardsFulfilled = (state, { payload }) => {
  state.cards = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleCreateNewCardFulfilled = (state, { payload }) => {
  const column = state.cards.find(
    (column) => column.columnId === payload.columnId
  );

  if (column) {
    column.cards.push(payload);
  } else {
    const newColumn = {
      columnId: payload.columnId,
      cards: [payload],
    };
    state.cards.push(newColumn);
  }
  state.isLoading = false;
  state.error = null;
};

export const handleUpdateCardByIdFulfilled = (state, { payload }) => {
  const column = state.cards.find((col) => col.columnId === payload.columnId);
  const cardIndex = column.cards.findIndex((card) => card._id === payload._id);

  if (cardIndex !== -1) {
    column.cards.splice(cardIndex, 1, payload);
  }
  state.isLoading = false;
  state.error = null;
};

// export const handleMoveColumnByIdFulfilled = (state, { payload }) => {
//   state.columns = payload;
//   state.isLoading = false;
//   state.error = null;
// };

// export const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
//   state.columns = payload;
//   state.isLoading = false;
//   state.error = null;
// };

// export const handleThunkPending = (state) => {
//   state.isLoading = true;
//   state.error = null;
// };

// export const handleThunkRejected = (state, { payload }) => {
//   state.error = payload;
//   state.isLoading = false;
// };
