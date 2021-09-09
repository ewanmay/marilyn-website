import React from "react";
import Hero from "./Hero";
import "./Home.scss";
import Message from "./Message";
import PrioritiesList from "./PrioritiesList";

interface HomeProps {
  refProps: any;
}

function Home({ refProps }: HomeProps) {
  return (
    <div className="home col-12 flex center">
      <div className="col-12">
        <Hero />
      </div>
      <div className="col-10 col-lg-6 flex column">
        <Message />
        <PrioritiesList refProps={refProps} />
      </div>
    </div>
  );
}

export default Home;
