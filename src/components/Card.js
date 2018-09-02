import React, { Component } from "react";
import PokemonType from "./PokemonType";
import PokemonInfo from "./PokemonInfo";

export default class Card extends Component {
	state = {
		open: false
	};
	toggle = () => {
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		const { pokemon } = this.props;
		const { open } = this.state;
		return (
			<div
				className="card col-lg-3 col-md-4 col-sm-6 col-12"
				style={{ width: "6rem" }}
			>
				<img
					className="card-img-top mx-auto d-block"
					src={pokemon.img}
					alt="rendered pokemon"
					style={{ width: "180px", height: "180px" }}
				/>
				<div className="card-body">
					<h5 className="card-title text-center">
						<strong>
							{" "}
							#{pokemon.num} {pokemon.name}
						</strong>
					</h5>
					<PokemonType pokemon={pokemon} />
					<div className="m-2 text-center">
						<button className="btn btn-link btn-sm" onClick={this.toggle}>
							More
						</button>
					</div>
					{open ? (
						<PokemonInfo pokemon={pokemon} open={open} toggle={this.toggle} />
					) : null}
				</div>
			</div>
		);
	}
}
