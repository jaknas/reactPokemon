import { GET_POKEMON } from "./types";

export const getPokemon = () => async dispatch => {
	const res = await fetch("http://localhost:3004/pokemon?_page=1&_limit=20");
	const json = await res.json();
	dispatch({
		type: GET_POKEMON,
		payload: json
	});
};
