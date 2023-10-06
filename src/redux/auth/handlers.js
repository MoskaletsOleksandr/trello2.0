export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};

export const handleLogoutFulfilled = (state) => {
  state.user = null;
  state.isLoading = false;
  state.isLoggedIn = true;
};
