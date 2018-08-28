import React from "react";

export default ({ pokemon }) => {
	return (
		<div className="card" style={{ width: "12rem" }}>
			<img className="card-img-top" src={pokemon.img} alt="rendered pokemon" />
			<div className="card-body">
				<h5 className="card-title">
					#{pokemon.num} {pokemon.name}
				</h5>
				{pokemon.type.map(type => (
					<span>{type} </span>
				))}
			</div>
		</div>
	);
};
