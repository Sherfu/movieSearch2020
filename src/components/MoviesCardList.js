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
      <Grid item lg={3} sm={6} md={4} xs={12} key={movie.id}>
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
