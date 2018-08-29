import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon } from "../actions/pokemonActions";

class CardList extends Component {
	componentDidMount() {
		this.props.getPokemon(1);
	}
	render() {
		const { pokemon } = this.props;

		return (
			<div className="row">
				{pokemon.map(pokemon => (
					<Card key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
		);
	}
}

CardList.propTypes = {
	pokemon: PropTypes.array.isRequired,
	getPokemon: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	pokemon: state.pokemon.list
});

export default connect(
	mapStateToProps,
	{ getPokemon }
)(CardList);
