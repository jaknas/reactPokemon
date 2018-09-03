import {
  GET_POKEMON_SUCCESS,
  GET_POKEMON_HAS_ERRORED,
  GET_POKEMON_IS_LOADING,
} from '../actions/types';

const initialState = {
  list: [],
  error: false,
  errorMessage: '',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return {
        list: action.payload,
      };
    case GET_POKEMON_HAS_ERRORED:
      return {
        error: action.hasErrored,
        errorMessage: action.errorMessage,
        list: state.list,
      };
    case GET_POKEMON_IS_LOADING:
      return {
        isLoading: action.isLoading,
        list: state.list,
      };
    default:
      return state;
  }
}
