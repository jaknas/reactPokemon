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
		Ghost: "#66b"
	};

	let style = {
		color: "white",
		padding: "1px 8px 4px 8px",
		borderRadius: "10px",
		margin: "2px",
		border: "1px solid rgba(0,0,0,0.2)",
		textShadow: "1px 1px 2px rgba(0,0,0,0.7)"
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
