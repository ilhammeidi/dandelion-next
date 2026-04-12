import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/lib/features/counter';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
};
