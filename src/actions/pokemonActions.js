import { GET_POKEMON_SUCCESS, GET_POKEMON_HAS_ERRORED, GET_POKEMON_IS_LOADING } from './types';

export const getPokemonHasErrored = (bool, error) => ({
  type: GET_POKEMON_HAS_ERRORED,
  hasErrored: bool,
  errorMessage: error,
});

export const getPokemonIsLoading = bool => ({
  type: GET_POKEMON_IS_LOADING,
  isLoading: bool,
});

export const getPokemonSuccess = payload => ({ type: GET_POKEMON_SUCCESS, payload });

export const getPokemon = page => async (dispatch) => {
  dispatch(getPokemonIsLoading(true));
  try {
    const res = await fetch(`http://localhost:3004/pokemon?_page=${page}&_limit=24`);
    const json = await res.json();
    dispatch(getPokemonSuccess(json));
  } catch (error) {
    dispatch(getPokemonHasErrored(true, error));
  }
};
