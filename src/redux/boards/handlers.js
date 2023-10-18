export const handleGetAllBoardsFulfilled = (state, { payload }) => {
  state.boards = payload;
  state.isBoardsLoading = false;
  state.error = null;
};

export const handleGetCurrentBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isBoardsLoading = false;
  state.error = null;
};

export const handleCreateNewBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isBoardsLoading = false;
  state.error = null;
};

export const handleUpdateBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isBoardsLoading = false;
  state.error = null;
};

export const handleDeleteBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = null;
  state.isBoardsLoading = false;
  state.error = null;
};

export const handleGetBackgroundsFulfilled = (state, { payload }) => {
  state.backgrounds = payload;
  state.isBoardsLoading = false;
  state.error = null;
};

export const handleBoardsThunkPending = (state) => {
  state.isBoardsLoading = true;
  state.error = null;
};

export const handleThunkRejected = (state, { payload }) => {
  state.error = payload;
  state.isBoardsLoading = false;
};
