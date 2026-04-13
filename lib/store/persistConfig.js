import storage from 'redux-persist/lib/storage'; // uses localStorage

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'], // only persist these slices
};

export default persistConfig;