import { createSlice } from '@reduxjs/toolkit';
import {
  handleAuthThunkPending,
  handleAuthThunkRejected,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleRegisterFulfilled,
  handleUpdateCurrentBoardIdFulfilled,
  handleUpdateThemeFulfilled,
  wakeUpBackendFulfilled,
  wakeUpBackendPending,
  wakeUpBackendRejected,
} from './handlers';
import { initialState } from './initialState';
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
  updateCurrentBoardIdThunk,
  updateThemeThunk,
  wakeUpBackendThunk,
} from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, handleAuthThunkPending)
      .addCase(registerThunk.fulfilled, handleRegisterFulfilled)
      .addCase(registerThunk.rejected, handleAuthThunkRejected)
      .addCase(loginThunk.pending, handleAuthThunkPending)
      .addCase(loginThunk.fulfilled, handleLoginFulfilled)
      .addCase(loginThunk.rejected, handleAuthThunkRejected)
      .addCase(logoutThunk.pending, handleAuthThunkPending)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(logoutThunk.rejected, handleAuthThunkRejected)
      .addCase(updateThemeThunk.pending, handleAuthThunkPending)
      .addCase(updateThemeThunk.fulfilled, handleUpdateThemeFulfilled)
      .addCase(updateThemeThunk.rejected, handleAuthThunkRejected)
      .addCase(updateCurrentBoardIdThunk.pending, handleAuthThunkPending)
      .addCase(
        updateCurrentBoardIdThunk.fulfilled,
        handleUpdateCurrentBoardIdFulfilled
      )
      .addCase(updateCurrentBoardIdThunk.rejected, handleAuthThunkRejected)
      .addCase(refreshUserThunk.pending, handleAuthThunkPending)
      .addCase(refreshUserThunk.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUserThunk.rejected, handleRefreshUserRejected)
      .addCase(wakeUpBackendThunk.pending, wakeUpBackendPending)
      .addCase(wakeUpBackendThunk.fulfilled, wakeUpBackendFulfilled)
      .addCase(wakeUpBackendThunk.rejected, wakeUpBackendRejected);
  },
});

export const authReducer = authSlice.reducer;
