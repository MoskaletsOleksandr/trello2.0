import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'accessToken'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedAuthReducer,
});
