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
  },
  media: {
    width: "100%",
    minHeight: 364,
    marginTop: "-48px",        
  },
  reating: { 
    background: "#01D277",
    borderRadius: "17px",
    width: 55,
    height:32,
    minHeight:32
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

  const yearOfRelease = new Date (movie.release_date).getFullYear();
  const monthOfRelease = new Date (movie.release_date).toLocaleString("en-us", { month: "long" });
 
  return (
     <Card className={classes.card}  >
        <Fab  className={classes.reating} size="small" aria-label="Ratting">
          <Typography variant="button">
          {movie.vote_average }
{/*             {movie.vote_average.toString().split(".")[0]}
            <sup>.{movie.vote_average.toString().split(".")[1] || 0}</sup> */}
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

        {/* <Fab  className={classes.reating} size="small" aria-label="Ratting">
          <Typography variant="button">
            {movie.vote_average.toString().split(".")[0]}
            <sup>.{movie.vote_average.toString().split(".")[1] || 0}</sup>
          </Typography>
        </Fab>      
      <Link
        component={RouterLink}
        to={`/movies/${movie.id}`}
        underline="none"
        variant="inherit"
      >        
        <img
          alt={movie.original_title}
          className={classes.media}
          onError={onErrorLoadingImage}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
        />
      </Link>      
      <CardContent style={{ backgroundColor: '#081B23'}}>
          <Typography className={classes.movieName} >
                {movie.original_title}
          </Typography>
          {"Release:"  + movie.release_date || "Unknown"}
      </CardContent>  */}   
    </Card>

  
    
  );
};

export default MovieCard;
