import React from "react";
import PokemonType from "./PokemonType";

export default ({ pokemon }) => {
	return (
		<div className="card col-lg-3" style={{ width: "6rem" }}>
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
			</div>
		</div>
	);
};
