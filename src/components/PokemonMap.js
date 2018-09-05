import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvolutionImg } from '../actions/pokemonActions';

const PokemonMap = ({ variant, title }) => (
  <React.Fragment>
    {variant !== null && typeof variant !== 'undefined' ? (
      <React.Fragment>
        <strong>{title}</strong>
      </React.Fragment>
    ) : null}
    {title.includes('Multipliers') && typeof variant !== 'undefined' && variant !== null
      ? variant.map(multiplier => (
          <li key={multiplier} className="list-group-item">
            {multiplier}
          </li>
      ))
      : null}
    {title.includes('Evolution') && typeof variant !== 'undefined' && variant !== null
      ? variant.map(evolution => (
          <li key={evolution.num} className="list-group-item">
            {evolution.name}
          </li>
      ))
      : null}
  </React.Fragment>
);

PokemonMap.defaultProps = {
  variant: undefined,
};

PokemonMap.propTypes = {
  variant: PropTypes.array,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pokemon: state.pokemon.list,
  isLoading: state.pokemon.isLoading,
  error: state.pokemon.error,
  errorMessage: state.pokemon.errorMessage,
  img: state.pokemon.img,
});

export default connect(
  mapStateToProps,
  {
    getEvolutionImg,
  },
)(PokemonMap);
