import {
  GET_POKEMON_SUCCESS,
  GET_POKEMON_HAS_ERRORED,
  GET_POKEMON_IS_LOADING,
  GET_PAGES_COUNT,
  CHANGE_CURRENT_PAGE,
  GET_PAGES_IS_LOADING,
  GET_PAGES_HAS_ERRORED,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_ID_IS_LOADING,
  GET_POKEMON_BY_ID_HAS_ERRORED,
} from '../actions/types';

const initialState = {
  list: [],
  pagination: {
    currentPage: 1,
    pageCount: '',
    isLoading: false,
    error: false,
    errorMessage: '',
  },
  error: false,
  errorMessage: '',
  isLoading: false,
  idQuery: {
    pokemon: '',
    isLoading: false,
    error: false,
    errorMessage: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case GET_POKEMON_HAS_ERRORED:
      return {
        ...state,
        error: action.hasErrored,
        errorMessage: action.errorMessage,
      };
    case GET_POKEMON_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case GET_POKEMON_BY_ID_IS_LOADING:
      return {
        ...state,
        idQuery: { ...state.idQuery, isLoading: action.isLoading },
      };
    case GET_POKEMON_BY_ID_HAS_ERRORED:
      return {
        ...state,
        idQuery: {
          ...state.idQuery,
          isLoading: false,
          error: action.hasErrored,
          errorMessage: action.errorMessage,
        },
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        idQuery: { ...state.idQuery, pokemon: action.payload, isLoading: false },
      };
    case GET_PAGES_COUNT:
      return {
        ...state,
        pagination: { ...state.pagination, pageCount: action.payload, isLoading: false },
      };
    case GET_PAGES_IS_LOADING:
      return {
        ...state,
        pagination: { ...state.pagination, isLoading: action.isLoading },
      };
    case GET_PAGES_HAS_ERRORED:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          isLoading: false,
          error: action.hasErrored,
          errorMessage: action.errorMessage,
        },
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.payload },
      };
    default:
      return state;
  }
}
