import React from "react";
//import ContentLoader from "react-content-loader";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const MoviesCardList = ({
  movies,
  loading,
  hideOverview = false,
  itemsPerRow = 2
}) => {
  const classes = useStyles();
  
  const moviesList = () => {
    return movies.map(movie => (
      <Grid item xs={12} sm={6} key={movie.id}>
        <MovieCard
            movie={movie}
            loading={loading}
            hideOverview={hideOverview}
        />
        
      </Grid>
    ));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {moviesList()}
      </Grid>
    </div>
  );
};

export default MoviesCardList;
