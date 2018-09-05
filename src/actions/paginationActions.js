/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import {
  GET_PAGES_COUNT,
  CHANGE_CURRENT_PAGE,
  GET_PAGES_HAS_ERRORED,
  GET_PAGES_IS_LOADING,
} from './types';

export const sendPages = payload => ({ type: GET_PAGES_COUNT, payload });

export const getPagesHasErrored = (bool, error) => ({
  type: GET_PAGES_HAS_ERRORED,
  hasErrored: bool,
  errorMessage: error,
});

export const getPagesIsLoading = bool => ({
  type: GET_PAGES_IS_LOADING,
  isLoading: bool,
});

export const changePage = payload => ({ type: CHANGE_CURRENT_PAGE, payload });

export const getPages = () => async (dispatch) => {
  dispatch(getPagesIsLoading(true));
  try {
    const res = await fetch('http://localhost:3004/pokemon');
    const json = await res.json();

    const pageNumber = (json.length / 24 + 1).toFixed();
    const pages = [];
    for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
    }
    dispatch(sendPages(pages));
  } catch (error) {
    dispatch(getPagesHasErrored(true, error));
  }
};

export const changePageNumber = page => (dispatch) => {
  dispatch(changePage(page));
};
