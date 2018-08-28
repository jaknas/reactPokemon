import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
	state = {
		page: "1",
		pokemons: []
	};

	async componentDidMount() {
		try {
			const response = await fetch(
				"http://localhost:3000/pokemon?_page=1&_limit=20"
			);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const json = await response.json();
			this.setState({
				pokemons: json
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { pokemons } = this.state;

		return (
			<div className="row">
				{pokemons.map(pokemon => (
					<Card key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		);
	}
}
