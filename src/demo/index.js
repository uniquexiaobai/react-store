import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore } from '../lib';
import { reducer } from './store';
import App from './App';
import './index.css';

const store = createStore(reducer, { count: 10 });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
