import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { boardsReducer } from './boards/slice';
import { cardsReducer } from './cards/slice';
import { columnsReducer } from './columns/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedAuthReducer,
  boards: boardsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
});
