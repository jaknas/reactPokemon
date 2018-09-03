import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import PokemonType from './PokemonType';

const PokemonInfo = ({ pokemon, open, toggle }) => (
  <React.Fragment>
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle} className="text-center">
        <strong>{pokemon.name}</strong>{' '}
        <img
          src={pokemon.img}
          style={{ width: 30, height: 30 }}
          alt="miniature render of pokemon"
        />
      </ModalHeader>
      <ModalBody>
        <ul className="list-group">
          <li className="list-group-item">
            Height: <strong>{pokemon.height}</strong>
          </li>
          <li className="list-group-item">
            Weight: <strong>{pokemon.weight}</strong>
          </li>
          <li className="list-group-item">
            Candy: <strong>{pokemon.candy}</strong>
          </li>
          {pokemon.candy_count ? (
            <li className="list-group-item">
              Candy count: <strong>{pokemon.candy_count}</strong>
            </li>
          ) : null}
          <li className="list-group-item">
            Egg: <strong>{pokemon.egg}</strong>
          </li>
          <li className="list-group-item">
            Spawn chance: <strong>{pokemon.spawn_chance}</strong>
          </li>
          <li className="list-group-item">
            Average spawns: <strong>{pokemon.avg_spawns}</strong>
          </li>
          <li className="list-group-item">
            Spawn Time: <strong>{pokemon.spawn_time}</strong>
          </li>
          <ul className="list-group">
            {Array.isArray(pokemon.multipliers) ? (
              <React.Fragment>
                <strong>Multipliers:</strong>
              </React.Fragment>
            ) : null}
            {Array.isArray(pokemon.multipliers)
              ? pokemon.multipliers.map(multiplier => (
                  <li key={multiplier} className="list-group-item">
                    {multiplier}
                  </li>
              ))
              : null}
          </ul>
          <ul className="list-group">
            <strong>Weaknesses:</strong>
            <PokemonType variant={pokemon.weaknesses} group="li" />
          </ul>
          <ul className="list-group">
            {typeof pokemon.prev_evolution !== 'undefined' ? (
              <React.Fragment>
                <strong>Previous Evolutions:</strong>
              </React.Fragment>
            ) : null}
            {typeof pokemon.prev_evolution !== 'undefined'
              ? pokemon.prev_evolution.map(evolution => (
                  <li key={evolution.num} className="list-group-item">
                    {evolution.name}
                  </li>
              ))
              : null}
          </ul>
          <ul className="list-group">
            {typeof pokemon.next_evolution !== 'undefined' ? (
              <React.Fragment>
                <strong>Next Evolutions:</strong>
              </React.Fragment>
            ) : null}
            {typeof pokemon.next_evolution !== 'undefined'
              ? pokemon.next_evolution.map(evolution => (
                  <li key={evolution.num} className="list-group-item">
                    {evolution.name}
                  </li>
              ))
              : null}
          </ul>
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Go Back
        </Button>
      </ModalFooter>
    </Modal>
  </React.Fragment>
);

PokemonInfo.propTypes = {
  pokemon: PropTypes.object.isRequired,
  open: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default PokemonInfo;
