import { combineReducers } from 'redux';
import { AnyAction, Reducer } from '@reduxjs/toolkit';
import appReducer from './slices/app';
import userReducer from './slices/user';
import commonReducer from './slices/common';
import languageReducer from './slices/language';

export * from './slices/app';
export * from './slices/user';
export * from './slices/common';

const productReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  common: commonReducer,
  language: languageReducer, // Thêm reducer của ngôn ngữ
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return productReducer(state, action);
};

export default rootReducer;