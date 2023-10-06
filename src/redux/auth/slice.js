import { createSlice } from '@reduxjs/toolkit';
import {
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleRegisterFulfilled,
} from './handlers';
import { initialState } from './initialState';
import { loginThunk, logoutThunk, registerThunk } from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, handleRegisterFulfilled);
    builder.addCase(loginThunk.fulfilled, handleLoginFulfilled);
    builder.addCase(logoutThunk.fulfilled, handleLogoutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
