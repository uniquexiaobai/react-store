import { useContext } from 'react';
import { StoreContext } from './context';

const useDispatch = () => {
	const { dispatch } = useContext(StoreContext);

	return dispatch;
};

export default useDispatch;
