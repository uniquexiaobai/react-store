import React from 'react';
import { useSelector, useDispatch } from '../lib';

const IncButton = React.memo(() => {
	const dispatch = useDispatch();

	const increase = () => {
		dispatch({ type: 'increase' });
	};

	return <button onClick={increase}>+</button>;
});

const DecButton = React.memo(() => {
	const dispatch = useDispatch();

	const decrease = () => {
		dispatch({ type: 'decrease' });
	};

	return <button onClick={decrease}>-</button>;
});

const App = () => {
	const count = useSelector(state => state.count);

	return (
		<div>
			<span>{count}</span>
			<IncButton />
			<DecButton />
		</div>
	);
};

export default App;
