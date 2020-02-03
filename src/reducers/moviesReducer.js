import {
    FETCH_MOVIES,
    FETCH_MOVIE_DETAILS,
    FETCH_MOVIE_REVIEWS,
    FETCH_GENRE,
    CLEANING_MOVIE_STATE,
    FETCH_MOVIES_BY_SEARCH
  } from "../actions/actionsType";

  const defaultState = {
    genres: [],
    loading: false,
    movies: [],
    movie: {},
    reviews: [],
    page: 1,
    totalPages: 1,
    totalResults: 0,
    genreId: 0
  };
  
  export default (state = defaultState, action = {}) => {
    switch (action.type) {
      case `${FETCH_GENRE}_PENDING`:
      case `${FETCH_MOVIES}_PENDING`:
      case `${FETCH_MOVIE_DETAILS}_PENDING`:  
      case `${FETCH_MOVIE_REVIEWS}_PENDING`:
      case `${FETCH_MOVIES_BY_SEARCH}_PENDING`: {
        return {
          ...state,
          loading: true
        };
      }
      case `${FETCH_GENRE}_FULFILLED`: {
        return {
          ...state,
          loading: false,
          genres: action.payload.data.genres
        };
      }
  
      case `${FETCH_MOVIES}_FULFILLED`: {
        return {
          ...state,
          loading: false,
          movies: action.payload.data.results,
          page: action.payload.data.page,
          totalPages: action.payload.data.total_pages,
          totalResults: action.payload.data.total_results,
          genreId: 0
        };
      }
      
      case `${FETCH_MOVIE_DETAILS}_FULFILLED`: {
        return {
          ...state,
          loading: false,
          movie: action.payload.data,
          genres: action.payload.data.genres,
          productionCompanies: action.payload.data.production_companies
        };
      }

      case `${FETCH_MOVIE_REVIEWS}_FULFILLED`: {
        return {
          ...state,
          loading: false,
          reviews: action.payload.data.results
        };
      }

      case `${FETCH_MOVIES_BY_SEARCH}_FULFILLED`: {
        return {
          ...state,
          loading: false,
          movies: action.payload.data.results,
          page: action.payload.data.page,
          totalPages: action.payload.data.total_pages,
          totalResults: action.payload.data.total_results,
          genreId: 0
        };
      }

      case CLEANING_MOVIE_STATE: {
        return {
          ...state,
          loading: false,
          movie: {},         
          reviews: []        

        };
      }

      default: {
        return state;
      }
    }
  };
  