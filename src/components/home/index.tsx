import React from "react";
import Hero from "./Hero";
import "./Home.scss";
import Message from "./Message";
import PrioritiesList from "./PrioritiesList";

function Home() {
  return (
    <div className="home col-12 flex center">
      <div className="col-12">
        <Hero />
      </div>
      <div className="col-10 col-lg-6 flex column">
        <Message />
        <PrioritiesList />
      </div>
    </div>
  );
}

export default Home;
