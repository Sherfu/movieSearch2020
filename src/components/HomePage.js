import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Pagination from "material-ui-flat-pagination";

import { fetchMovies } from "../actions/moviesActions";

import Header from "../components/Header";
import MoviesCardList from "../components/MoviesCardList";

//import Loader from "../components/common/Loader";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2)
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 160px)"
  },
  loaderSpinOne: {
    position: "relative",
    right: 50
  },
  loaderSpinTwo: {
    position: "relative",
    right: 80
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
      <Container maxWidth = 'lg' >
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
