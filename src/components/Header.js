import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieSearch } from "../actions/moviesActions";
import { fetchMovies } from "../actions/moviesActions";

import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import InputBase from "@material-ui/core/InputBase";
import { useTheme } from "@material-ui/core/styles";

import Paper from '@material-ui/core/Paper';
//import InputBase from '@material-ui/core/InputBase';
//import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from "@material-ui/icons/Search";
import Logo from "./Logo";


const useStyles = makeStyles(theme => ({
   root: {
   flexGrow: 1,    
   left: "0%",
   right:"-0.27%",
   top: "0%",
   bottom: "83.17%",   
  // background: "radial-gradient(82.98% 213.08% at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgba(8, 27, 35, 0) 100%)",  
  },
  inputRoot: {
    color: "#01D277",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    backgroundColor: "#FFFFFF",
    marginTop: "-10px",
    marginLeft: "88px",   
  },
  inputInput: {
    color: "#01D277",
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  imageIcon: {
    height: '100%'
  },
  LogoRoot: {
   textAlign: 'center',     
   padding: theme.spacing(5) , 
   height:193, 
   width:"100%",
   background: "radial-gradient(82.98% 213.08% at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgb(6, 12, 30) 100%);",
  },
  LogoImg: {
    position: "absolute",
    left: "50.13%",
    right: "47.47%",
    top: "7.26%",
    bottom: "89.94%",
  },
   iconLtop: {
    position: "absolute",
    left: "35.13%",
    right: "56.67%",
    top: "4.26%",
    bottom: "95.39%",
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
  },
  iconRtop: {
    position: "absolute",
    left: "71.47%",
    right: "-14.67%",
    top: "5.26%",
    bottom: "93.82%",
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
  },
  iconLBotm: {
    position: "absolute",
    left: "35.13%",
    right: "56.67%",
    top: "4.26%",
    bottom: "95.39%",
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
  },
  searchRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',    
    margin: theme.spacing(0,3),    
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '22px',       
  },
  searchInput: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "#01D277",
  },
  searchiconButton: {
    padding: 10,    
  },
  iconColor: {
    color: "#01D277",   
  },
  paperLt: {
    position: "absolute",
    left: "12.13%",
    right: "70.67%",
    top: "0%",
    bottom: "98.39%", 
    [theme.breakpoints.down('xs')]: {      
      bottom: "99.39%",
    },
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
    [theme.breakpoints.up('lg')]: {
      left: "22.13%",
      right: "65.67%", 
    },
  },
  paperLts: {
    position: "absolute",
    left: "10.13%",
    right: "66.67%",
    [theme.breakpoints.down('xs')]: {
      right: "57.67%",
      bottom: "99.39%",
    },    
    top: "0%",
    bottom: "98.39%",
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
    [theme.breakpoints.up('lg')]: {
      left: "21.13%",
      right: "56.67%",
    },
  },
  paperRt: {
    //padding: theme.spacing(1),
    position: "absolute",
    left: "66.13%",
    right: "5.67%",
    top: "0%",
    bottom: "98.39%",
    [theme.breakpoints.down('xs')]: {
      bottom: "99.39%",
    },
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
    [theme.breakpoints.up('lg')]: {
      left: "64.13%",
      right: "10.67%",
    },   

  },
  paperRts: {
    //padding: theme.spacing(1),
    position: "absolute",
    left: "68.13%",
    right: "16.67%",
    [theme.breakpoints.down('xs')]: {
      right: "-11.33%",
      bottom: "99.39%",
    }, 
    top: "0%",
    bottom: "98.39%",
    background: "rgba(1, 210, 119, 0.83)",
    borderRadius: "3.5px",
    transform: "rotate(-45deg)",
    [theme.breakpoints.up('lg')]: {
      left: "65.13%",
      right: "16.67%",
    },
  },
  paperRtxs: {
    //padding: theme.spacing(1),
    position: "absolute",
    [theme.breakpoints.down('xs')]: {
      top: "12%",
      left: "66.13%",
      right: "4.67%",
      bottom: "87.39%",
      transform: "rotate(-45deg)",
      background: "rgba(1, 210, 119, 0.83)",
      borderRadius: "3.5px",
    },
    [theme.breakpoints.up('md')]: {
     // backgroundColor: theme.palette.primary.main,
    }, 
  },
  paperLtxs: {
    //padding: theme.spacing(1),
    position: "absolute",
    [theme.breakpoints.down('xs')]: {
      top: "12%",
      left: "10.13%",
      right: "63.67%",
      bottom: "87.39%",
      transform: "rotate(-45deg)",
      background: "rgba(1, 210, 119, 0.83)",
      borderRadius: "3.5px",
    }, 
  },
}));

function Header( ) {

  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  
  const { movies, loading, page, totalResults } = useSelector(
    state => state.moviesStore
  );

  const searchChangeHandler = event => {
    const searchText = event.target.value;
    if(searchText != '') dispatch(fetchMovieSearch(searchText));
    else dispatch(fetchMovies());
  };

  //const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
 
    <div className={classes.root}> 
  {/*       <div className={classes.iconLtop}></div>
        <div className={classes.iconRtop}></div>  */}
        <div maxWidth = 'lg' >
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <Grid container>
            <Paper className={classes.paperLt}></Paper>
            </Grid>
            <Grid container>
            <Paper className={classes.paperLts}></Paper>
            </Grid>
            <Grid container > 
            <Paper className={classes.paperRt}></Paper>
            </Grid>
            <Grid container >
            <Paper className={classes.paperRts}></Paper>
            </Grid>
            <Grid container >
            <Paper className={classes.paperRtxs}></Paper>
            </Grid>
            <Grid container >
            <Paper className={classes.paperLtxs}></Paper>
            </Grid>
          </Grid>
      </div> 

        <div className={classes.LogoRoot}>   
            <Logo fill="#01D277" className={classes.LogoImg}/>  
        </div>     
            <Paper component="form" className={classes.searchRoot}>
            <InputBase
                className={classes.searchInput}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search movies' }}
                onChange={(e) => searchChangeHandler(e)}
            />
            <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
                <SearchIcon className={classes.iconColor} />
            </IconButton>        
            </Paper>
    </div>
  );
}

export default Header;
