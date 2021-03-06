import React from "react";
import { Router } from "@reach/router";

//import { BrowserRouter, Route} from 'react-router-dom';

import CssBaseline from "@material-ui/core/CssBaseline";
import customTheme from "./theme";
import { ThemeProvider } from "@material-ui/core";

import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import Container from "@material-ui/core/Container";

//#F2F2F2 #303030

function App() {
  return (
    <Container maxWidth = 'xxl' style={{ backgroundColor: '#081B23', padding:'0px 0px'}}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
          <Router>
            <HomePage path="/" /> 
            <MoviePage path="/movies/:movieId" />        
          </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;
