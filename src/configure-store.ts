export interface ActionCreator<A> {
  (...args: any[]): A;
}

const configureStore = ({
  reducer,
  preloadedState,
}: {
  reducer: any;
  preloadedState: any;
}) => {
  let currReducer = reducer;
  let currState = preloadedState;
  let listeners: any = [];

  function getState() {
    return currState;
  }

  function dispatch(action: any) {
    currState = currReducer(action, currState);
    listeners.slice().forEach((listener: any) => listener());
    return action;
  }

  function subscribe(listener: any) {
    listeners.push(listener);

    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default configureStore;
