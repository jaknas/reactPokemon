import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
	state = {
		pokemons: []
	};

	async componentDidMount() {
		try {
			const response = await fetch("http://localhost:3000/pokemon");
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
			<ul>
				{pokemons.map(pokemon => (
					<Card pokemon={pokemon} />
				))}
			</ul>
		);
	}
}
