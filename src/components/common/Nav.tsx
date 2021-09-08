import React from "react";
import "./Common.scss";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

interface NavProps {
  setPhoneNavOpen: (x: boolean) => void;
}

function Nav({ setPhoneNavOpen }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      <div className="nav-placeholder"></div>
      <div className="nav flex nb center">
        <div className="col-10 col-lg-6 flex space-between center">
          <img
            className="m-lg-2"
            src="/images/nav.svg"
            alt="Re-Elect Marilyn Dennis"
          />
          {isDesktopOrLaptop && (
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
          )}
          {!isDesktopOrLaptop && !isOpen && (
            <div className="flex right column">
              <img
                src="/images/menu.svg"
                alt="menu"
                height="25px"
                onClick={() => {
                  setPhoneNavOpen(true);
                  setIsOpen(true);
                }}
              />
            </div>
          )}
        </div>
      </div>
      {!isDesktopOrLaptop && isOpen && (
        <div className="links-phone flex left column">
          <img
            src="/images/times.svg"
            alt="close menu"
            className="times"
            height="25px"
            onClick={() => {
              setPhoneNavOpen(false);
              setIsOpen(false);
            }}
          />
          <NavLink
            activeClassName="active"
            to="/home"
            onClick={() => {
              setPhoneNavOpen(false);
              setIsOpen(false);
            }}
          >
            HOME
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/about"
            onClick={() => {
              setPhoneNavOpen(false);
              setIsOpen(false);
            }}
          >
            ABOUT MARILYN
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/priorities"
            onClick={() => {
              setPhoneNavOpen(false);
              setIsOpen(false);
            }}
          >
            PRIORITIES
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/support"
            onClick={() => {
              setPhoneNavOpen(false);
              setIsOpen(false);
            }}
          >
            SUPPORT
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Nav;
