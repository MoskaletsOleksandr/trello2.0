import { createSlice } from '@reduxjs/toolkit';
import {
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleRegisterFulfilled,
  handleThunkPending,
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
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(updateThemeThunk.fulfilled, handleUpdateThemeFulfilled)
      .addCase(
        updateCurrentBoardIdThunk.fulfilled,
        handleUpdateCurrentBoardIdFulfilled
      )
      .addCase(refreshUserThunk.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUserThunk.rejected, handleRefreshUserRejected)
      .addMatcher(({ type }) => type.endsWith('/pending'), handleThunkPending)
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        handleThunkRejected
      );
  },
});

export const authReducer = authSlice.reducer;
