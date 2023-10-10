export const handleGetAllBoardsFulfilled = (state, { payload }) => {
  state.boards = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleGetCurrentBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleCreateNewBoardFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleUpdateBoardByIdFulfilled = (state, { payload }) => {
  state.currentBoard = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleGetBackgroundsFulfilled = (state, { payload }) => {
  state.backgrounds = payload;
  state.isLoading = false;
  state.error = null;
};
