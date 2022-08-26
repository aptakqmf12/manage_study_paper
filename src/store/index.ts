import { combineReducers, configureStore } from '@reduxjs/toolkit';
import problemSlice from './slices/problemSlice';

const rootReducers = combineReducers({
  problems: problemSlice,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
