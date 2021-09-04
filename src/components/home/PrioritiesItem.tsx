import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

interface PrioritiesItemProps {
  icon: string;
  text: string;
  link: string;
  title: string;
}

function PrioritiesItem({ icon, link, text, title }: PrioritiesItemProps) {
  return (
    <div className="priorities flex column fill">
      <div className="header flex">
        <img src={icon} className="icon" />
        <h4 className="title">{title}</h4>
      </div>
      <div className="body">{text}</div>
      <Link to={link} className="link nt">
        SEE FULL POINT
      </Link>
    </div>
  );
}

export default PrioritiesItem;
