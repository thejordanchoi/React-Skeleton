import React from 'react';
import './App.css';
import ItemList from './components/ItemList';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<ItemList />
			</div>
		);
	}
}

export default App;
