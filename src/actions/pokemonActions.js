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

export const sendPages = payload => ({ type: 'SEND_PAGES', payload });

export const getPokemon = page => async (dispatch) => {
  try {
    dispatch(getPokemonIsLoading(true));

    const res = await fetch(`http://localhost:3004/pokemon?_page=${page}&_limit=24`);
    const json = await res.json();
    dispatch(getPokemonIsLoading(false));
    dispatch(getPokemonSuccess(json));
  } catch (error) {
    dispatch(getPokemonHasErrored(true, error));
  }
};

// export const getPages = () => async (dispatch) => {
//   const res = await fetch('http://localhost:3004/pokemon');
//   const json = await res.json();

//   const pageNumber = (json.length / 24).toFixed();
//   dispatch(sendPages(pageNumber));
// };
