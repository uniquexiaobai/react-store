import React from 'react';
import { useSelector, useDispatch } from '../lib';

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
