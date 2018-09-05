import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemonById } from '../actions/pokemonActions';
import PokemonMap from './PokemonMap';

class PokemonInfo extends React.Component {
  componentDidMount() {
    this.props.getPokemonById(this.props.id);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.pokemon.id === nextProps.pokemon.id) {
      return false;
    }
    return true;
  }

  listInfo = (pokemon) => {
    // chop up pokemon object to arrays with key : value pairs
    const pokemonEntries = Object.entries(pokemon);
    if (pokemon.candy_count) {
      // if there's candy_count in db, slice to contain only valuable info
      const pokemonInfoCut = pokemonEntries.slice(5, 13);
      // now map over k:v pairs and return JSX li tags. Also add styling
      const listedInfo = pokemonInfoCut.map(([key, value]) => (
        <li key={key} className="list-group-item" style={{ textTransform: 'capitalize' }}>
          {key.split('_').join(' ')}: <strong>{value}</strong>
        </li>
      ));
      return listedInfo;
    }
    return pokemonEntries.slice(5, 12).map(([key, value]) => (
      <li key={key} className="list-group-item" style={{ textTransform: 'capitalize' }}>
        {key.split('_').join(' ')}: <strong>{value}</strong>
      </li>
    ));
  };

  render() {
    const {
      open, toggle, pokemon, error, errorMessage,
    } = this.props;
    return (
      <React.Fragment>
        <Modal isOpen={open} toggle={toggle}>
          <ModalHeader
            toggle={toggle}
            className="text-center"
            style={{ padding: '10px 16px 10px 16px' }}
          >
            <strong>{pokemon.name}</strong>{' '}
            <img
              src={pokemon.img}
              style={{ width: 35, height: 35 }}
              alt="miniature render of pokemon"
            />
          </ModalHeader>
          <ModalBody>
            {error ? `Failed to fetch data: ${errorMessage}` : null}
            <ul className="list-group">
              {this.listInfo(pokemon)}
              <ul className="list-group">
                <PokemonMap variant={pokemon.multipliers} title="Multipliers:" />
              </ul>
              <ul className="list-group">
                <PokemonMap variant={pokemon.weaknesses} groupBy="li" title="Weaknesses:" />
              </ul>
              <ul className="list-group">
                <PokemonMap variant={pokemon.prev_evolution} title="Previous Evolution:" />
              </ul>
              <ul className="list-group">
                <PokemonMap variant={pokemon.next_evolution} title="Next Evolution:" />
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
  }
}

PokemonInfo.defaultProps = {
  errorMessage: '',
};

PokemonInfo.propTypes = {
  pokemon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  getPokemonById: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const mapStateToProps = state => ({
  pokemon: state.pokemon.idQuery.pokemon,
  error: state.pokemon.idQuery.error,
  errorMessage: state.pokemon.idQuery.errorMessage,
  img: state.pokemon.idQuery.img,
});

export default connect(
  mapStateToProps,
  {
    getPokemonById,
  },
)(PokemonInfo);
