export const handleGetBoardCardsFulfilled = (state, { payload }) => {
  state.cards = payload;
  state.isCardsLoading = false;
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
  state.isCardsLoading = false;
  state.error = null;
};

export const handleUpdateCardByIdFulfilled = (state, { payload }) => {
  const column = state.cards.find((col) => col.columnId === payload.columnId);
  const cardIndex = column.cards.findIndex((card) => card._id === payload._id);

  if (cardIndex !== -1) {
    column.cards.splice(cardIndex, 1, payload);
  }
  state.isCardsLoading = false;
  state.error = null;
};

export const handleMoveCardByIdFulfilled = (state, { payload }) => {
  const columnId1 = payload[0].columnId;
  const columnId2 = payload[1]?.columnId;

  const index1 = state.cards.findIndex(
    (column) => column.columnId === columnId1
  );
  const index2 = state.cards.findIndex(
    (column) => column.columnId === columnId2
  );

  if (index1 !== -1 && index2 !== -1) {
    state.cards[index1] = { ...state.cards[index1], cards: payload[0].cards };
    state.cards[index2] = { ...state.cards[index2], cards: payload[1].cards };
  } else if (index1 !== -1 && !columnId2) {
    state.cards[index1] = { ...state.cards[index1], cards: payload[0].cards };
  } else if (index1 !== -1 && index2 === -1) {
    state.cards[index1] = { ...state.cards[index1], cards: payload[0].cards };
    state.cards.push(payload[1]);
  }

  state.isCardsLoading = false;
  state.error = null;
};

export const handleDeleteCardByIdFulfilled = (state, { payload }) => {
  const column = state.cards.find((col) => col.columnId === payload.columnId);
  column.cards = payload.cards;
  state.isCardsLoading = false;
  state.error = null;
};

export const handleCardsThunkPending = (state) => {
  state.isCardsLoading = true;
  state.error = null;
};

export const handleThunkRejected = (state, { payload }) => {
  state.error = payload;
  state.isCardsLoading = false;
};

export const handleChangePriority = (state, { payload }) => {
  state.priority = payload;
  state.isCardsLoading = false;
  state.error = null;
};
