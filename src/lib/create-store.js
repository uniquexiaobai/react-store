import { useReducer } from 'react';

const createStore = (reducer, initialState = {}) => {
	function useStore() {
		const [state, dispatch] = useReducer(reducer, initialState);

		return [state, dispatch];
	}

	return useStore;
};

export default createStore;
