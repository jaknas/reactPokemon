import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { getPokemon } from '../actions/pokemonActions';
import { getPages, changePageNumber } from '../actions/paginationActions';

class PaginationNew extends Component {
  componentDidMount() {
    this.props.getPages();
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.numberOfPages === nextProps.numberOfPages
      && this.props.currentPage === nextProps.currentPage
    ) {
      return false;
    }
    return true;
  }

  handleClick = (e) => {
    this.props.changePageNumber(Number(e.target.value));
    this.props.getPokemon(e.target.value);
  };

  handlePrevious = () => {
    const { currentPage, changePageNumber, getPokemon } = this.props;

    if (currentPage > 1) {
      changePageNumber(currentPage - 1);
      getPokemon(currentPage - 1);
    } else {
      return null;
    }
    return null;
  };

  handleNext = () => {
    const {
      currentPage, numberOfPages, changePageNumber, getPokemon,
    } = this.props;
    if (currentPage >= 1 && currentPage < numberOfPages[numberOfPages.length - 1]) {
      changePageNumber(currentPage + 1);
      getPokemon(currentPage + 1);
    } else {
      return null;
    }
    return null;
  };

  render() {
    const { numberOfPages, currentPage } = this.props;
    return (
      <Pagination>
        <PaginationItem onClick={this.handlePrevious} disabled={currentPage === numberOfPages[0]}>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {numberOfPages
          ? numberOfPages.map(page => (
              <PaginationItem key={page} active={currentPage === page}>
                <PaginationLink key={page} value={page} onClick={this.handleClick}>
                  {page}
                </PaginationLink>
              </PaginationItem>
          ))
          : null}
        <PaginationItem
          onClick={this.handleNext}
          disabled={currentPage === numberOfPages[numberOfPages.length - 1]}
        >
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

PaginationNew.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  getPages: PropTypes.func.isRequired,
  changePageNumber: PropTypes.func.isRequired,
  numberOfPages: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  pokemon: state.pokemon.list,
  numberOfPages: state.pokemon.pagination.pageCount,
  currentPage: state.pokemon.pagination.currentPage,
});

export default connect(
  mapStateToProps,
  { getPokemon, getPages, changePageNumber },
)(PaginationNew);
