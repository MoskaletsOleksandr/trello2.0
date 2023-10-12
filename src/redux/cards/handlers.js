export const handleGetBoardCardsFulfilled = (state, { payload }) => {
  state.cards = payload;
  state.isLoading = false;
  state.error = null;
};

export const handleCreateNewCardFulfilled = (state, { payload }) => {
  state.cards.push(payload);
  state.isLoading = false;
  state.error = null;
};

// export const handleUpdateColumnByIdFulfilled = (state, { payload }) => {
//   const columnIndex = state.columns.findIndex(
//     (column) => column._id === payload._id
//   );
//   if (columnIndex !== -1) {
//     state.columns[columnIndex].title = payload.title;
//   }

//   state.isLoading = false;
//   state.error = null;
// };

// export const handleMoveColumnByIdFulfilled = (state, { payload }) => {
//   state.columns = payload;
//   state.isLoading = false;
//   state.error = null;
// };

// export const handleDeleteColumnByIdFulfilled = (state, { payload }) => {
//   state.columns = payload;
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
