import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon } from "../actions/pokemonActions";
import CardNew from "./CardNew";
import { CardDeck } from "reactstrap";

class CardList extends Component {
	componentDidMount() {
		this.props.getPokemon(1);
	}
	render() {
		const { pokemon } = this.props;

		return (
			<CardDeck
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center"
				}}
				className="mx-auto"
			>
				{pokemon.map(pokemon => (
					<CardNew key={pokemon.id} pokemon={pokemon} />
				))}
			</CardDeck>
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
