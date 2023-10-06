import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedAuthReducer,
});
