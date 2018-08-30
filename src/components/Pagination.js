import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon } from "../actions/pokemonActions";

class Pagination extends Component {
	state = {
		active: 1
	};

	handleClick = e => {
		this.props.getPokemon(e.target.text);
		this.setState({
			active: Number([e.target.text])
		});
	};

	render() {
		return (
			<nav style={{ marginTop: "1rem" }}>
				<ul className="pagination pagination-lg justify-content-center">
					<li className={`page-item ${this.state.active === 1 && "active"}`}>
						<a className="page-link" href="#header" onClick={this.handleClick}>
							1
						</a>
					</li>
					<li className={`page-item ${this.state.active === 2 && "active"}`}>
						<a className="page-link" href="#header" onClick={this.handleClick}>
							2
						</a>
					</li>
					<li className={`page-item ${this.state.active === 3 && "active"}`}>
						<a className="page-link" href="#header" onClick={this.handleClick}>
							3
						</a>
					</li>
					<li className={`page-item ${this.state.active === 4 && "active"}`}>
						<a className="page-link" href="#header" onClick={this.handleClick}>
							4
						</a>
					</li>
					<li className={`page-item ${this.state.active === 5 && "active"}`}>
						<a className="page-link" href="#header" onClick={this.handleClick}>
							5
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

Pagination.propTypes = {
	getPokemon: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	pokemon: state.pokemon.list
});

export default connect(
	mapStateToProps,
	{ getPokemon }
)(Pagination);
