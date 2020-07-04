import { useReducer, useLayoutEffect, useRef } from 'react';
import useStore from './use-store';

const equal = (a: any, b: any) => a === b;

const useSelector = (selector: any, equalityFn: any = equal) => {
  const [, forceUpdate] = useReducer(n => n + 1, 0);
  const store = useStore();
  const { getState, subscribe } = store;
  const state = selector(getState());
  const prevStateRef = useRef();

  function checkUpdate() {
    const currState = selector(getState());
    if (!equalityFn(prevStateRef.current, currState)) {
      prevStateRef.current = currState;
      forceUpdate();
    }
  }

  useLayoutEffect(() => {
    subscribe(() => {
      checkUpdate();
    });
  }, [store]);

  return state;
};

export default useSelector;
