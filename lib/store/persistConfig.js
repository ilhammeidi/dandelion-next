import storage from 'redux-persist/lib/storage'; // uses localStorage

const persistConfig = {
  key: 'dandelion-next',
  storage,
  whitelist: ['counter'], // only persist these slices
};

export default persistConfig;