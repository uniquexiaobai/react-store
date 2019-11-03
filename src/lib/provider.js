import React from 'react';
import { StoreContext } from './context';

const Provider = ({ store, children }) => {
	const [state, dispatch] = store();

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

export default Provider;
