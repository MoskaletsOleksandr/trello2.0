export const handleGetBoardColumnsFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isColumnsLoading = false;
  state.error = null;
};

export const handleCreateNewColumnFulfilled = (state, { payload }) => {
  state.columns.push(payload);
  state.isColumnsLoading = false;
  state.error = null;
};

export const handleUpdateColumnByIdFulfilled = (state, { payload }) => {
  const columnIndex = state.columns.findIndex(
    (column) => column._id === payload._id
  );
  if (columnIndex !== -1) {
    state.columns[columnIndex].title = payload.title;
  }

  state.isColumnsLoading = false;
  state.error = null;
};

export const handleMoveColumnByIdFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isColumnsLoading = false;
  state.error = null;
};

export const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isColumnsLoading = false;
  state.error = null;
};

export const handleColumnsThunkPending = (state) => {
  state.isColumnsLoading = true;
  state.error = null;
};

export const handleColumnsThunkRejected = (state, { payload }) => {
  state.error = payload;
  state.isColumnsLoading = false;
};
