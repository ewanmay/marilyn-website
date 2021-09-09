import React from "react";
import "./About.scss";
import CommitteeList from "./CommitteeList";
import AboutHero from "./Hero";
import Message from "./Message";
import Paragraph from "./Paragraph";
import text from "./text";

function About() {
  return (
    <div className="flex center">
      <div className="col-12 p-0">
        <AboutHero />
      </div>
      <div className="col-10 col-lg-6 p-0 flex center">
        <i className="quote">
          “Representing Wards 5 &amp; 10 as your CBE Trustee was a dream in the
          making for many years – and I’m ready for another four years!  The
          Board has started some important work that is going to have a long
          term, positive impact on the students we serve and I am determined to
          use my experience and knowledge to see that work through. There is
          more work to be done and my commitment to the families of Wards 5
          &amp; 10 is unwavering.” <br />
          <span>
            <b> - Marilyn Dennis</b>
          </span>
        </i>
        <Paragraph
          title={text.p1title}
          body={text.p1body}
          direction={"right"}
        />
        <Paragraph title={text.p2title} body={text.p2body} direction={"left"} />
        <Paragraph
          title={text.p3title}
          body={text.p3body}
          direction={"right"}
        />
        <Message />
        <CommitteeList />
      </div>
    </div>
  );
}

export default About;
