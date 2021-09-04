import React from "react";
import { Switch, Route, Redirect } from "react-router";
import "./App.scss";
import About from "./components/about";
import Nav from "./components/common/Nav";
import Home from "./components/home";
import Priorities from "./components/priorities";
import Volunteer from "./components/volunteer";
import Vote from "./components/vote";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/priorities">
          <Priorities />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/vote">
          <Vote />
        </Route>
        <Route path="/support">
          <Volunteer />
        </Route>
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
