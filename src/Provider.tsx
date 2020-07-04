import React from 'react';
import StoreContext from './context';

const Provider = ({
  store,
  children,
}: {
  store: any;
  children: React.ReactChildren;
}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Provider;
