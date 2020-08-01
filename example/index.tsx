import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, configureStore, useSelector, useDispatch } from '../.';

const { useEffect } = React;

const Count = () => {
  const num = useSelector(state => state.num);

  useEffect(() => {
    console.log('Count render');
  });

  return <h1>{num}</h1>;
};

const Button = () => {
  const dispatch = useDispatch();
  const inc = () => dispatch({ type: 'inc' });
  const incAsync = () =>
    dispatch(dispatch => {
      setTimeout(() => {
        dispatch({ type: 'inc' });
      }, 2000);
    });

  useEffect(() => {
    console.log('Button render');
  });

  return (
    <div>
      <button onClick={inc}>inc</button>
      <button onClick={incAsync}>inc async</button>
    </div>
  );
};

const Test = () => {
  useEffect(() => {
    console.log('Test render');
  });

  return <p />;
};

const App = () => {
  return (
    <div className='App'>
      <Count />
      <Button />
      <Test />
    </div>
  );
};

const logger = ({ getState }) => next => action => {
  console.log('before dispatch', action);
  const result = next(action);
  console.log('after dispatch', getState());
  return result;
};

const thunk = ({ getState, dispatch }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }

  return next(action);
};

const reducer = (action, state) => ({ ...state, num: state.num + 1 });
const preloadedState = { num: 1 };
const store = configureStore({
  reducer,
  middlewares: [thunk, logger],
  preloadedState,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
