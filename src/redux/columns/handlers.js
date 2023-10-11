export const handleGetBoardColumnsFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleCreateNewColumnFulfilled = (state, { payload }) => {
  state.columns.push(payload);
  state.isLoading = false;
  state.error = null;
};

// export const handleUpdateBoardByIdFulfilled = (state, { payload }) => {
//   state.currentBoard = payload;
//   state.isLoading = false;
//   state.error = null;
// };

// export const handleDeleteBoardByIdFulfilled = (state, { payload }) => {
//   state.currentBoard = null;
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
