import React from "react";
import "./Common.scss";
import Button from "./Button";
import Footer from "./Footer";

function Nav() {
  return (
    <div className="nav flex space-between nb">
      <img className="m-lg-2" src="/images/nav.svg" />
      <h5 className="wt nav-coming-soon">COMING SOON </h5>
    </div>
  );
}

export default Nav;
