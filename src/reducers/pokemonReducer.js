import { GET_POKEMON } from "../actions/types";

const initialState = {
	list: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_POKEMON:
			return {
				list: action.payload
			};
		default:
			return state;
	}
}
