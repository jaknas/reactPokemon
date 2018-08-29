import { GET_POKEMON } from "./types";

export const getPokemon = page => async dispatch => {
	const res = await fetch(
		`http://localhost:3004/pokemon?_page=${page}&_limit=20`
	);
	const json = await res.json();
	dispatch({
		type: GET_POKEMON,
		payload: json
	});
};
