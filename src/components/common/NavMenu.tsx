import React from "react";
import Button from "./Button";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <div className="nav-menu">
      <div className="links flex right column">
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
  );
}

export default NavMenu;
