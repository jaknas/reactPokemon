import React from 'react';
import PropTypes from 'prop-types';
import { typeColors, style } from '../helpers/styles';

const PokemonType = ({ variant, groupBy }) => (
  <React.Fragment>
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
    {groupBy === 'span'
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
PokemonType.propTypes = {
  variant: PropTypes.array,
  groupBy: PropTypes.string.isRequired,
};

export default PokemonType;
