import React from "react";
import { shallow } from "enzyme";
import PokemonType from "./PokemonType";

it("expect to render PokemonType component", () => {
	const mockPokemon = [
		{
			id: 1,
			type: [1, 2, 3]
		}
	];

	expect(shallow(<PokemonType pokemon={mockPokemon[0]} />)).toMatchSnapshot();
});
