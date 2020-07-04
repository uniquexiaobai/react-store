import useStore from './use-store';

const useDispatch = () => {
  const store = useStore();

  return store.dispatch;
};

export default useDispatch;
