import React from "react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import About from "./components/about";
import Nav from "./components/common/Nav";
import Home from "./components/home";
import Support from "./components/support";
import Vote from "./components/vote";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={"App " + menuOpen ? "phone-nav-open" : ""}>
      <Nav setPhoneNavOpen={setMenuOpen} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/vote">
          <Vote />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
