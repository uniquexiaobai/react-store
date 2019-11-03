# @lokibai/react-use-copy-clipboard

> state management for react

[![NPM](https://img.shields.io/npm/v/@lokibai/react-store.svg)](https://www.npmjs.com/package/@lokibai/react-store) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @lokibai/react-store
```

## Usage

```jsx
// index.js
import React from 'react';
import { createStore, Provider } from '@lokibai/react-store';
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

const store = createStore(reducer, { count: 10 });

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
