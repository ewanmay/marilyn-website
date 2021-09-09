import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import "./App.scss";
import About from "./components/about";
import Nav from "./components/common/Nav";
import Home from "./components/home";
import Support from "./components/support";
import Vote from "./components/vote";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const myRef = React.createRef<any>();

  useEffect(() => {
    if (hash) {
      window.scrollTo(0, myRef.current.offsetTop - 100);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 0);
    }
  }, [pathname, hash, myRef]);

  return (
    <div className={`App ${menuOpen ? "phone-nav-open" : ""}`}>
      <Nav setPhoneNavOpen={setMenuOpen} />
      <Switch>
        <Route path="/home">
          <Home refProps={myRef} />
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
