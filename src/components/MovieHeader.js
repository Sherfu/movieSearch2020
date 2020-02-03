import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    //position:"absolute",
  },
  header: {
    height: 320,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 40,
    marginBottom: 24
  },
  moviePoster: {
    width: "100%",
    borderRadius: "10px",
    marginTop:"-75px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5), 0px 16px 32px rgba(0, 0, 0, 0.5)",
  },
  generalInfo: {
    display: "flex",
    alignItems: "center",
    "& legend": {
      width: "inherit",
      marginRight: 8
    }
  },
  modalContainer: {
    position: "absolute",
    height: "90vh",
    width: "100%",
    background: "#111"
  },
  movieTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "30px",
    color: "#E3F4FC",
  },
  movieReview: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#E3F4FC",
  },
  reviewCont: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#9FBBC7",
  },
  borderLine : {
    border: "1px solid #0F303D",
    boxSizing: "border-box",
    margin:"20px 0px",
  }

}));

const MovieHeader = ({ movie }) => {
 
   console.log(movie);
  const classes = useStyles();

  const onErrorLoadingImage = e => {
    e.target.src = "";
  };
 
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(3, 3, 3, 0.30), rgba(0, 0, 5, 0.30)), url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2${movie.backdrop_path})`
  };

   const yearOfRelease = new Date (movie.release_date).getFullYear();

  return (
    <div className={classes.root}>      

      <div className={classes.header} style={headerStyle}> 
 {/*        <IconButton onClick={handleOpen} disabled={!trailer || !trailer.key}>
          <PlayCircleOutlineIcon
            style={{ fontSize: 64, color: "#c53364" }}
          ></PlayCircleOutlineIcon>
        </IconButton> */}
      </div>
      <Container maxWidth = 'sm' >
      <Grid container spacing={2}>
        <Grid item lg={5}>
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            alt={movie.original_title}
            className={classes.moviePoster}
          />
        </Grid>
        <Grid item lg={6}>
          <div>
            <Typography className={classes.movieTitle} >
              {movie.original_title}
            </Typography>
            <Typography className={classes.reviewCont} >
              {  yearOfRelease }
            </Typography>
          </div>
          <div className={classes.generalInfo}>
            <Typography className={classes.reviewCont} >{movie.vote_average}</Typography>
 {/*            <Rating
              name="read-only"
              value={movie.vote_average / 2}
              precision={0.1}
              readOnly
            /> */}
           
          </div>       
        </Grid>
       
        <Grid item lg={12} >
        <div className={classes.borderLine}> </div>
        <div>
            <Typography className={classes.movieReview}>
              Overview
            </Typography>
            <Typography className={classes.reviewCont} >{movie.overview}</Typography>
          </div>  
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default MovieHeader;
