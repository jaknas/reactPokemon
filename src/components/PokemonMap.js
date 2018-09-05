import React from 'react';
import PropTypes from 'prop-types';
import { typeColors, style } from '../helpers/styles';

const PokemonMap = ({ variant, title, groupBy }) => (
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
    {groupBy === 'li' && typeof variant !== 'undefined'
      ? variant.map(type => (
          <li
            key={type}
            className="list-group-item"
            style={{
              backgroundColor: typeColors[type],
              ...style,
            }}
          >
            {type}
          </li>
      ))
      : null}
    {groupBy === 'span' && typeof variant !== 'undefined'
      ? variant.map(type => (
          <span
            key={type}
            className="d-inline text-center badge"
            style={{
              backgroundColor: typeColors[type],
              ...style,
            }}
          >
            {type}
          </span>
      ))
      : null}
  </React.Fragment>
);

PokemonMap.defaultProps = {
  variant: undefined,
  groupBy: undefined,
};

PokemonMap.propTypes = {
  variant: PropTypes.array,
  title: PropTypes.string.isRequired,
  groupBy: PropTypes.string,
};

export default PokemonMap;
