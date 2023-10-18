export const selectIsLoading = (state) =>
  state.auth.isAuthLoading ||
  state.boards.isBoardsLoading ||
  state.columns.isColumnsLoading ||
  state.cards.isCardsLoading;

export const selectError = (state) =>
  state.auth.isAuthError ||
  state.boards.isBoardsError ||
  state.columns.isColumnsError ||
  state.cards.isCardsError;
