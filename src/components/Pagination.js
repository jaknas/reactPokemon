import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPokemon } from "../actions/pokemonActions";

class Pagination extends Component {
	state = {
		active: 1,
		numberOfPages: [1, 2, 3, 4, 5]
	};

	handleClick = e => {
		this.props.getPokemon(e.target.text);
		this.setState({
			active: Number([e.target.text])
		});
	};

	addNewPage = () => {
		const { numberOfPages } = this.state;
		this.setState({
			numberOfPages: numberOfPages.concat([numberOfPages.length + 1])
		});
	};

	render() {
		const { active, numberOfPages } = this.state;
		return (
			<nav style={{ marginTop: "1rem" }}>
				<ul className="pagination justify-content-center">
					{numberOfPages.map(page => (
						<li
							className={`page-item ${active === page && "active"}`}
							key={page}
						>
							<a
								className="page-link"
								href="#header"
								onClick={this.handleClick}
							>
								{page}
							</a>
						</li>
					))}
					{numberOfPages.length < 8 ? (
						<button className="btn btn-link" onClick={this.addNewPage}>
							+
						</button>
					) : null}
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
