export const selectUser = (state) => state.auth.user;

export const selectAccessToken = (state) => state.auth.accessToken;

export const selectTheme = (state) => state.auth.user.theme;

export const selectCurrentBoardId = (state) => state.auth.user.currentBoardId;

export const selectIsBackendReady = (state) => state.auth.isBackendReady;

export const selectAuthError = (state) => state.auth.authError;
