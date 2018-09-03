import React from "react";

export default ({ pokemon }) => {
	let typeColors = {
		Grass: "#7c5",
		Poison: "#a59",
		Fire: "#f42",
		Flying: "#89f",
		Water: "#39f",
		Bug: "#ab2",
		Normal: "#aa9",
		Psychic: "#f59",
		Electric: "#fc3",
		Ground: "#db5",
		Fighting: "#b54",
		Rock: "#ba6",
		Ice: "#6cf",
		Ghost: "#66b",
		Dragon: "#76e"
	};

	let style = {
		color: "white",
		borderRadius: "5px",
		margin: "4px"
	};

	return (
		<div className="text-center">
			{pokemon.type.map(type => (
				<span
					key={type}
					className="d-inline text-center badge"
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
