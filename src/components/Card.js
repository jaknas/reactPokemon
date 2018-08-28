import React from "react";

export default ({ pokemon }) => {
	let style = {
		padding: "3px",
		color: "white",
		borderRadius: "5px",
		backgroundColor: "black",
		textAling: "center"
	};
	return (
		<div className="card col-lg-3" style={{ width: "6rem" }}>
			<img
				className="card-img-top mx-auto d-block"
				src={pokemon.img}
				alt="rendered pokemon"
				style={{ width: "180px" }}
			/>
			<div className="card-body">
				<h5 className="card-title text-center">
					#{pokemon.num} {pokemon.name}
				</h5>
				{pokemon.type.map(type => (
					<span key={type} className="mx-auto text-center" style={style}>
						{type}{" "}
					</span>
				))}
			</div>
		</div>
	);
};
