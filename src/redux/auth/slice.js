import { createSlice } from '@reduxjs/toolkit';
import {
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleRegisterFulfilled,
  handleThunkPending,
  handleThunkRejected,
} from './handlers';
import { initialState } from './initialState';
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, handleRegisterFulfilled)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
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
