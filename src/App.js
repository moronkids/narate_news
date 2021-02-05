import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "routes/index";
import logo from './logo.svg';
import './App.css';
import Signin from 'pages/signin/index'
import "assets/scss/styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
