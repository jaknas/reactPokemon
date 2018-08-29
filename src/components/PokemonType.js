import React from "react";

export default ({ pokemon }) => {
	let typeColors = {
		Grass: "green",
		Poison: "purple",
		Fire: "red",
		Flying: "aqua",
		Water: "blue",
		Bug: "Chartreuse",
		Normal: "grey"
	};

	let style = {
		color: "white",
		padding: "1px 8px 4px 8px",
		borderRadius: "10px",
		margin: "2px"
	};

	return (
		<div className="text-center">
			{pokemon.type.map(type => (
				<span
					key={type}
					className="d-inline text-center"
					style={{
						backgroundColor: typeColors[type],
						...style
					}}
				>
					{type}
				</span>
			))}
		</div>
	);
};
