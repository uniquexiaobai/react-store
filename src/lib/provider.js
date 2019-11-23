import React, { useMemo } from 'react';
import { StoreContext } from './context';

const Provider = ({ store, children }) => {
	const [state, dispatch] = store();

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export default Provider;
