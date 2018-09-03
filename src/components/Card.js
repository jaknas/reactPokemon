import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonType from './PokemonType';
import PokemonInfo from './PokemonInfo';

export default class Card extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { pokemon } = this.props;
    const { open } = this.state;
    return (
      <div
        className="card col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 text-center"
        style={{ width: '6rem' }}
      >
        <img
          className="card-img-top d-block mx-auto"
          src={pokemon.img}
          alt="rendered pokemon"
          style={{
            padding: '10px',
            minHeight: '250px',
          }}
        />
        <div className="card-body mx-auto" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <h5 className="card-title text-center" style={{ marginBottom: '3px' }}>
            <strong style={{ fontWeight: 600 }}>
              {' '}
              #{pokemon.num} {pokemon.name}
            </strong>
          </h5>
          <PokemonType pokemon={pokemon} />
          <div className="text-center">
            <button className="btn btn-link btn-sm" onClick={this.toggle} type="button">
              More
            </button>
          </div>
          {open ? <PokemonInfo pokemon={pokemon} open={open} toggle={this.toggle} /> : null}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
