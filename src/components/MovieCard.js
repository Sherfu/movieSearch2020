import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { 
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Fab,
  Link
} from "@material-ui/core";

import { Link as RouterLink } from "@reach/router";

//import placeholderImage from "../Images/placeholder-image.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    //maxWidth: 345
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',   
    borderRadius: "8px", 
    background: "#081B23",
  },
  media: {
    width: "100%",
    minHeight: 364,
    marginTop: "-48px",
     
  },
  reating: {     
    borderRadius: "17px",
    width: 55,
    height:32,
    minHeight:32,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#E6F7FF",
  },
  movieName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#E6F7FF",
  },

}));

const MovieCard = ({ movie, loading, hideOverview }) => {
  console.log(movie);
  const classes = useStyles();
  const onErrorLoadingImage = e => {
    e.target.src = "";
  };
  const rating = parseInt(movie.vote_average * 10);
  const yearOfRelease = new Date (movie.release_date).getFullYear();
  const monthOfRelease = new Date (movie.release_date).toLocaleString("en-us", { month: "long" });
 
  return (
     <Card className={classes.card}  >
         <Fab 
            className={classes.reating} 
            size="small"
            aria-label="Ratting"            
            style={{background: ((rating >= 70)? '#01D277' : (rating < 40 ? '#D1225B' : '#4902A3' )) }}
          >
          <Typography variant="button">
            {rating + "%"}  
          </Typography>
        </Fab>
        <Link
          component={RouterLink}
          to={`/movies/${movie.id}`}
          underline="none"
          variant="inherit"
        >
        <CardMedia
          component="img"          
          alt={movie.original_title}
          className={classes.media}        
          image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          onError={onErrorLoadingImage}
        />
        </Link>
       <CardActionArea>
      <CardContent style={{ backgroundColor: '#081B23'}}>
          <Typography className={classes.movieName} >
                {movie.original_title}
          </Typography>
          <Typography className={classes.movieName} >
            { monthOfRelease+ " " + yearOfRelease || "Unknown"}
          </Typography>
      </CardContent>
      </CardActionArea>   
    </Card>
    
  );
};

export default MovieCard;
