import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Hello,
  Provider,
  configureStore,
  useSelector,
  useDispatch,
} from '../.';

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

  useEffect(() => {
    console.log('Button render');
  });

  return <button onClick={inc}>+</button>;
};

const Test = () => {
  useEffect(() => {
    console.log('Test render');
  });

  return <p />;
};

const App = () => {
  const reducer = (action, state) => ({ ...state, num: state.num + 1 });
  const preloadedState = { num: 1 };
  const store = configureStore({ reducer, preloadedState });

  return (
    <Provider store={store}>
      <div className='App'>
        <Count />
        <Button />
        <Test />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
