import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import { getPokemon, getPokemonHasErrored, getPokemonIsLoading } from '../actions/pokemonActions';
import CardNew from './CardNew';

class CardList extends Component {
  componentDidMount() {
    this.props.getPokemon(1);
  }

  render() {
    const { pokemon, error, errorMessage } = this.props;
    return (
      <CardDeck className="mx-auto d-flex justify-content-center">
        {error ? `Failed to fetch data: ${errorMessage}` : null}
        {pokemon.map(poke => (
          <CardNew key={poke.id} pokemon={poke} />
        ))}
      </CardDeck>
    );
  }
}

CardList.defaultProps = {
  errorMessage: '',
};

CardList.propTypes = {
  pokemon: PropTypes.array.isRequired,
  getPokemon: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const mapStateToProps = state => ({
  pokemon: state.pokemon.list,
  isLoading: state.pokemon.isLoading,
  error: state.pokemon.error,
  errorMessage: state.pokemon.errorMessage,
});

export default connect(
  mapStateToProps,
  {
    getPokemon,
    getPokemonHasErrored,
    getPokemonIsLoading,
  },
)(CardList);
