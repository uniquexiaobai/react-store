import { useContext } from 'react';
import StoreContext from './context';

const useStore = () => {
  const store = useContext<any>(StoreContext);

  return store;
};

export default useStore;
