import React, { Component } from "react";
import { Provider } from "react-redux";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header name={"Pokemon List"} />
				<CardList />
				<Pagination />
			</div>
		);
	}
}

export default App;
