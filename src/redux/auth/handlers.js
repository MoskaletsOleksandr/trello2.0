export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isAuthLoading = false;
  state.error = null;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isAuthLoading = false;
  state.error = null;
};

export const handleLogoutFulfilled = (state) => {
  state.user = null;
  state.isAuthLoading = false;
  state.error = null;
};

export const handleUpdateThemeFulfilled = (state, { payload }) => {
  state.user.theme = payload.theme;
  state.isAuthLoading = false;
  state.error = null;
};

export const handleUpdateCurrentBoardIdFulfilled = (state, { payload }) => {
  state.user.currentBoardId = payload.boardId;
  state.isAuthLoading = false;
  state.error = null;
};

export const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isAuthLoading = false;
  state.error = null;
};

export const handleRefreshUserRejected = (state, { payload }) => {
  state.user = null;
  state.isAuthLoading = false;
  state.error = payload;
};

export const wakeUpBackendFulfilled = (state, { payload }) => {
  state.isBackendReady = true;
  state.error = null;
};

export const wakeUpBackendPending = (state, { payload }) => {
  state.isBackendReady = false;
  state.error = null;
};

export const wakeUpBackendRejected = (state, { payload }) => {
  state.isBackendReady = false;
  state.error = payload;
};

export const handleAuthThunkPending = (state) => {
  state.isAuthLoading = true;
  state.error = null;
};

export const handleAuthThunkRejected = (state, { payload }) => {
  state.error = payload;
  state.isAuthLoading = false;
};
