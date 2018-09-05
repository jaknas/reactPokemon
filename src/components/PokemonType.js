import React from 'react';
import PropTypes from 'prop-types';

const PokemonType = ({ variant, group }) => {
  const typeColors = {
    Grass: '#7c5',
    Poison: '#a59',
    Fire: '#f42',
    Flying: '#89f',
    Water: '#39f',
    Bug: '#ab2',
    Normal: '#aa9',
    Psychic: '#f59',
    Electric: '#fc3',
    Ground: '#db5',
    Fighting: '#b54',
    Rock: '#ba6',
    Ice: '#6cf',
    Ghost: '#66b',
    Dragon: '#76e',
    Fairy: '#e9e',
    Dark: '#754',
    Steel: '#aab',
  };

  const style = {
    color: 'white',
    borderRadius: '5px',
    margin: '4px',
  };

  return (
    <React.Fragment>
      {group === 'li'
        ? [...variant].map(type => (
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
        : [...variant].map(type => (
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
        ))}
    </React.Fragment>
  );
};
PokemonType.propTypes = {
  variant: PropTypes.array.isRequired,
  group: PropTypes.string.isRequired,
};

export default PokemonType;
