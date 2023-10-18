import { createSlice } from '@reduxjs/toolkit';
import {
  handleAuthThunkPending,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleRegisterFulfilled,
  handleThunkRejected,
  handleUpdateCurrentBoardIdFulfilled,
  handleUpdateThemeFulfilled,
} from './handlers';
import { initialState } from './initialState';
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
  updateCurrentBoardIdThunk,
  updateThemeThunk,
} from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, handleRegisterFulfilled)
      .addCase(registerThunk.pending, handleAuthThunkPending)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(loginThunk.pending, handleAuthThunkPending)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(logoutThunk.pending, handleAuthThunkPending)
      .addCase(updateThemeThunk.fulfilled, handleUpdateThemeFulfilled)
      .addCase(updateThemeThunk.pending, handleAuthThunkPending)
      .addCase(
        updateCurrentBoardIdThunk.fulfilled,
        handleUpdateCurrentBoardIdFulfilled
      )
      .addCase(updateCurrentBoardIdThunk.pending, handleAuthThunkPending)
      .addCase(refreshUserThunk.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUserThunk.pending, handleAuthThunkPending)
      .addCase(refreshUserThunk.rejected, handleRefreshUserRejected)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const authReducer = authSlice.reducer;
