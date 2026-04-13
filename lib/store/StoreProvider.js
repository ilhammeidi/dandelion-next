'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore } from './store';

export default function StoreProvider({ children }) {
  const [store, setStore] = useState(undefined);
  const [isMounted, setIsMounted] = useState(false);

  if (store == undefined) {
    setStore(makeStore);
  }

  useEffect(() => {
    setIsMounted(true); // eslint-disable-line
  }, []);

  if (!isMounted) return null;

  const persistor = persistStore(makeStore);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
