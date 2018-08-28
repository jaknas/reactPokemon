import React, { Component } from "react";
import { Provider } from "react-redux";
import CardList from "./components/CardList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Pokemon List</h1>
				<CardList />
			</div>
		);
	}
}

export default App;
