export const selectIsLoading = (state) =>
  state.auth.isAuthLoading ||
  state.boards.isBoardsLoading ||
  state.columns.isColumnsLoading ||
  state.cards.isCardsLoading;
