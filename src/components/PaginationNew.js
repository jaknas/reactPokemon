import React from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { getPokemon } from '../actions/pokemonActions';

class PaginationNew extends React.Component {
  state = {
    active: 1,
    numberOfPages: [],
  };

  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  async componentDidMount() {
    const res = await fetch('http://localhost:3004/pokemon');
    const json = await res.json();

    const pageNumber = (json.length / 24 + 1).toFixed();
    const pages = [];
    for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
    }
    this.setState({
      numberOfPages: pages,
    });
  }

  handleClick = (e) => {
    this.props.getPokemon(e.target.value);
    this.setState({
      active: Number([e.target.value]),
    });
  };

  handlePrevious = () => {
    if (this.state.active > 1) {
      this.props.getPokemon(this.state.active - 1);
      this.setState(prevState => ({
        active: prevState.active - 1,
      }));
    } else {
      return null;
    }
    return null;
  };

  handleNext = () => {
    if (
      this.state.active >= 1
      && this.state.active < this.state.numberOfPages[this.state.numberOfPages.length - 1]
    ) {
      this.props.getPokemon(this.state.active + 1);
      this.setState(prevState => ({
        active: prevState.active + 1,
      }));
    } else {
      return null;
    }
    return null;
  };

  render() {
    const { numberOfPages, active } = this.state;
    return (
      <Pagination>
        <PaginationItem onClick={this.handlePrevious} disabled={active === numberOfPages[0]}>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {numberOfPages.map(page => (
          <PaginationItem key={page} active={active === page}>
            <PaginationLink key={page} value={page} onClick={this.handleClick}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          onClick={this.handleNext}
          disabled={active === numberOfPages[numberOfPages.length - 1]}
        >
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

PaginationNew.propTypes = {
  getPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemon: state.pokemon.list,
});

export default connect(
  mapStateToProps,
  { getPokemon },
)(PaginationNew);
