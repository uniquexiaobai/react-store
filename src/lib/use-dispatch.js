import { useContext, useCallback } from 'react';
import { StoreContext } from './context';

const useDispatch = () => {
	const { dispatch } = useContext(StoreContext);

	const memoizedDispatch = useCallback(dispatch, []);

	return memoizedDispatch;
};

export default useDispatch;
