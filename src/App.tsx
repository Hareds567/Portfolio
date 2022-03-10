import React from "react";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Local Components
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio";
import ContactMe from "./ContactInformation/ContactMe";
import About from "./About/About";

import HomePage from "./HomePage/HomePage";

//Styles
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/work">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <ContactMe />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Router>
    </>
  );
};

export default App;
