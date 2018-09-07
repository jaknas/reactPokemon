import React from 'react';
import PropTypes from 'prop-types';

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
            <img
              src={`http://www.serebii.net/pokemongo/pokemon/${evolution.num}.png`}
              style={{ width: 35, height: 35, marginLeft: 5 }}
              alt="pokemon evolution"
            />
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

export default PokemonMap;
