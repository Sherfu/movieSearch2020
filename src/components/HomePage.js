import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { fetchMovies } from "../actions/moviesActions";

import Header from "../components/Header";
import MoviesCardList from "../components/MoviesCardList";

//import Loader from "../components/common/Loader";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    
  },  
  pageTitle: {    
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    color:"#E3F4FC",
    margin:"40px 0px",
  },
}));

const HomePage = () => {

  const dispatch = useDispatch();
  
  const { movies, loading, page, totalResults } = useSelector(
    state => state.moviesStore
  );
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth = 'xl' >
      <div>
         <div className={classes.pageTitle}>
            Popular Movies
         </div> 
         <Grid container  >
          <MoviesCardList movies={movies} cols={6} />        
        </Grid>    
        </div>
     </Container> 
    </div>
  );
};

export default HomePage;
