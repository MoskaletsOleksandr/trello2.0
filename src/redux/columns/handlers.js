export const handleGetBoardColumnsFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isColumnsLoading = false;
  state.columnsError = null;
};

export const handleCreateNewColumnFulfilled = (state, { payload }) => {
  state.columns.push(payload);
  state.isColumnsLoading = false;
  state.columnsError = null;
};

export const handleUpdateColumnByIdFulfilled = (state, { payload }) => {
  const columnIndex = state.columns.findIndex(
    (column) => column._id === payload._id
  );
  if (columnIndex !== -1) {
    state.columns[columnIndex].title = payload.title;
  }

  state.isColumnsLoading = false;
  state.columnsError = null;
};

export const handleMoveColumnByIdFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isColumnsLoading = false;
  state.columnsError = null;
};

export const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
  state.columns = payload;
  state.isColumnsLoading = false;
  state.columnsError = null;
};

export const handleColumnsThunkPending = (state) => {
  state.isColumnsLoading = true;
  state.columnsError = null;
};

export const handleColumnsThunkRejected = (state, { payload }) => {
  state.columnsError = payload;
  state.isColumnsLoading = false;
};
