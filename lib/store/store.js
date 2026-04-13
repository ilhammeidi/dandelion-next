import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import counterSlice from '@/lib/features/counter';
import persistConfig from './persistConfig';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});
