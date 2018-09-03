import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Container>
					<Header name={"Pokemon List"} />
					<CardList />
					<Pagination />
				</Container>
			</Provider>
		);
	}
}

export default App;
