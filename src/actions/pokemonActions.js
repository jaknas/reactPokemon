import { GET_POKEMON } from "./types";

export const getPokemon = page => async dispatch => {
	try {
		const res = await fetch(
			`http://localhost:3004/pokemon?_page=${page}&_limit=20`
		);
		const json = await res.json();
		dispatch({
			type: GET_POKEMON,
			payload: json
		});
	} catch (error) {
		console.log("Error when fetching data");
	}
};
