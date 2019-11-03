import { useContext } from 'react';
import { StoreContext } from './context';

const defaultSelector = state => state;

const useSelector = (selector = defaultSelector) => {
	const { state } = useContext(StoreContext);

	return selector(state);
};

export default useSelector;
