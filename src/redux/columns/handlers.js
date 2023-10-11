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

export const handleUpdateColumnByIdFulfilled = (state, { payload }) => {
  const columnIndex = state.columns.findIndex(
    (column) => column._id === payload._id
  );
  if (columnIndex !== -1) {
    state.columns[columnIndex].title = payload.title;
  }

  state.isLoading = false;
  state.error = null;
};

export const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
  const columnIndexToDelete = state.columns.findIndex(
    (column) => column._id === payload._id
  );
  if (columnIndexToDelete !== -1) {
    state.columns.splice(columnIndexToDelete, 1);
  }

  state.isLoading = false;
  state.error = null;
};

// export const handleThunkPending = (state) => {
//   state.isLoading = true;
//   state.error = null;
// };

// export const handleThunkRejected = (state, { payload }) => {
//   state.error = payload;
//   state.isLoading = false;
// };
