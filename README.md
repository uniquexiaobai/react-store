# @lokibai/react-store

> state management for react

[![NPM](https://img.shields.io/npm/v/@lokibai/react-store.svg)](https://www.npmjs.com/package/@lokibai/react-store)

## Install

```bash
npm install --save @lokibai/react-store
```

## Usage

```jsx
// index.js
import React from 'react';
import { configureStore, Provider } from '@lokibai/react-store';
import App from './app';

const reducer = (state, action = {}) => {
	const { type } = action;

	switch (type) {
		case 'increase':
			return { ...state, count: state.count + 1 };
		case 'decrease':
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

const store = configureStore({reducer, preloadedState: { count: 10 });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
```

```jsx
// app.js
import React from 'react';
import { useSelector, useDispatch } from '@lokibai/react-store';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: 'increase' });
  };

  const decrease = () => {
    dispatch({ type: 'decrease' });
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default App;
```

## License

MIT © [](https://github.com/)

---

This project was bootstrapped with [create-react-library](https://github.com/udilia/create-react-library).
