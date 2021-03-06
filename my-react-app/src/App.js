import React from 'react';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./views/Login";
import MyNav from "./components/Nav";

const About = ()=> <h1 className="title is-1">About Page</h1>
const Game = ()=> <h1 className="title is-1">Game Page</h1>
const Home = ()=> <h1 className="title is-1">Home Page</h1>
const NotFound = ()=> <h1 className="title is-1">404</h1>

function App() {
  return (
    <Router>
      <div className="App">
      <MyNav />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
