import React from "react";
import "./Common.scss";
import Button from "./Button";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav-placeholder"></div>
      <div className="nav flex nb center">
        <div className="col-10 col-lg-6 flex space-between center">
          <img className="m-lg-2" src="/images/nav.svg" />
          <div className="links flex right">
            <NavLink activeClassName="active" to="/home">
              HOME
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              ABOUT MARILYN
            </NavLink>
            <NavLink activeClassName="active" to="/priorities">
              PRIORITIES
            </NavLink>
            <NavLink activeClassName="active" to="/support">
              SUPPORT
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
