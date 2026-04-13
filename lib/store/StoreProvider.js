'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { makeStore } from './store';

export default function StoreProvider({ children }) {
  const [store, setStore] = useState(undefined);

  if (store == undefined) {
    setStore(makeStore());
  }

  return (
    <Provider store={store}>{children}</Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
