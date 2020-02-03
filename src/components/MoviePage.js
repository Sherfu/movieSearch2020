import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";



import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {
  fetchMovie,  
  fetchMovieReviews,
  cleaningMovieReducer
} from "../actions/moviesActions";

import MovieHeader from "../components/MovieHeader";
import MoviesCardList from "../components/MoviesCardList";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#081B23",
    minHeight:400,
  },
  reviewsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },
  moviesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2)
  }
}));

const MoviePage = ({ movieId }) => {
  
  const dispatch = useDispatch();

  const { 
    movie,
    loading,
    reviews
  } = useSelector(state => state.moviesStore);

  const classes = useStyles();

  const handleClick = () => { 
    //window.history.back();
  }


  useEffect(() => {
    dispatch(fetchMovie(movieId));    
    dispatch(fetchMovieReviews(movieId));
    return () => {
      //cleaningMovieReducer();
    };
  }, [dispatch, movieId]);

  return (
    <div className={classes.root}>
          {movie && movie.id && (
            <MovieHeader
              movie={movie}
            />
          )}
    </div>
   
  );
};

export default MoviePage;
