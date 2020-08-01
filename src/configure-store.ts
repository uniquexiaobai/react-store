export interface ActionCreator<A> {
  (...args: any[]): A;
}

const applyMiddleware = (middlewares: any) => (configureStore: any) => (
  ...args: any
) => {
  const store = configureStore(...args);
  let dispatch: any;

  const middlewareAPI = {
    getState: store.getState,
    dispatch: (arg: any) => dispatch(arg),
  };

  const chain: any = middlewares.map((middleware: any) =>
    middleware(middlewareAPI)
  );
  dispatch = compose(chain)(store.dispatch);

  return { ...store, dispatch };
};

const compose = (fns: any) => {
  if (fns.length === 0) return (arg: any) => arg;
  if (fns.length === 1) return fns[0];

  return fns.reduce((a: any, b: any) => (...args: any) => a(b(...args)));
};

const configureStore = ({
  reducer,
  middlewares,
  preloadedState,
}: {
  reducer: any;
  middlewares: any;
  preloadedState: any;
}) => {
  if (middlewares && middlewares.length) {
    return applyMiddleware(middlewares)(configureStore)({
      reducer,
      preloadedState,
    });
  }

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

  dispatch({ type: 'init' });

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default configureStore;
