import React from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div
      className={`hero-container flex center ${
        isDesktopOrLaptop ? "laptop" : "phone"
      }`}
    >
      {isDesktopOrLaptop && <div className="col-2"></div>}
      <div
        className={`col-lg-5 col-sm-12 flex center column hero-content ${
          isDesktopOrLaptop ? "laptop" : "phone"
        }`}
      >
        <div className="col-auto flex left column">
          <h4 className="rt bold">RE-ELECT</h4>
          <h1 className="nt bold">Marilyn Dennis</h1>
          <h4 className="wt nb p-1">
            <b> Monday, October 18, 2021</b>
          </h4>
          <h5 className="bt bold pt-2">Public School Trustee, Wards 5 & 10</h5>
        </div>
      </div>
      <div className="col-lg-3 col-sm-12 flex center">
        <img
          className={`hero-image ${isDesktopOrLaptop ? "laptop" : "phone"}`}
          src="/images/marilyn.png"
          alt="Marilyn Dennis Portrait"
        />
      </div>
      {isDesktopOrLaptop && <div className="col-2"></div>}
      <img
        className={`hero-decoration ${isDesktopOrLaptop ? "laptop" : "phone"}`}
        src="/images/hero-dec.svg"
        alt="Simple Decoration"
      />
    </div>
  );
}

export default Hero;
