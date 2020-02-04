import { client } from "./";

import {
  FETCH_MOVIES,
  FETCH_MOVIES_BY_SEARCH,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_REVIEWS,
  CLEANING_MOVIE_STATE
} from "./actionsType";


export function fetchMovies(page = 1, type = "popular") {
     return dispatch => {
      dispatch({
        type: FETCH_MOVIES,
        payload: client.get(`/movie/${type}`, {
          params: {
            page
          }
        })
      });
    };
  }


  export function fetchMovie(id) {    
    return dispatch => {
      dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: client.get(`/movie/${id}`)
      });
    };
  }

  export function fetchMovieReviews (id) {
    return dispatch => {
      dispatch({
        type:FETCH_MOVIE_REVIEWS,
        payload: client.get(`/movie/${id}/reviews`)
      })
    }

  }

  export function fetchMovieSearch (searchText) {
    return dispatch => {
      dispatch({
        type:FETCH_MOVIES_BY_SEARCH,
        payload: client.get(`search/movie?query='${searchText}'+'&&'`)
      })
    }

  }


  export function cleaningMovieReducer() {
    return dispatch => {
      dispatch({
        type: CLEANING_MOVIE_STATE,
        payload: {}
      });
    };
  }
  