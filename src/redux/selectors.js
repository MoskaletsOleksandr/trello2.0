export const selectIsLoading = (state) =>
  state.auth.isAuthLoading ||
  state.boards.isBoardsLoading ||
  state.columns.isColumnsLoading ||
  state.cards.isCardsLoading;

export const selectError = (state) =>
  state.auth.authError ||
  state.boards.boardsError ||
  state.columns.columnsError ||
  state.cards.cardsError;
