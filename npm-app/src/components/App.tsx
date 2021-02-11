import React from 'react';
import PackList from './PackList';
import { Provider } from 'react-redux';
import { store } from '../state';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>Search For NPM Package</h1>
				<PackList />
			</div>
		</Provider>
	);
};

export default App;
