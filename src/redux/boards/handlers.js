export const handleGetAllBoardsFulfilled = (state, { payload }) => {
  state.boards = payload;
  state.isBoardsLoading = false;
  state.boardsError = null;
};

export const handleGetCurrentBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isBoardsLoading = false;
  state.boardsError = null;
};

export const handleCreateNewBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isBoardsLoading = false;
  state.boardsError = null;
};

export const handleUpdateBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isBoardsLoading = false;
  state.boardsError = null;
};

export const handleDeleteBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = null;
  state.isBoardsLoading = false;
  state.boardsError = null;
};

export const handleGetBackgroundsFulfilled = (state, { payload }) => {
  state.backgrounds = payload;
  state.isBoardsLoading = false;
  state.boardsError = null;
};

export const handleBoardsThunkPending = (state) => {
  state.isBoardsLoading = true;
  state.boardsError = null;
};

export const handleBoardsThunkRejected = (state, { payload }) => {
  state.boardsError = payload;
  state.isBoardsLoading = false;
};
