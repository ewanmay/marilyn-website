import React from "react";
import { Switch, Route } from "react-router";
import PrioritiesItem from "./PrioritiesItem";

function PrioritiesList() {
  const priorities = [
    {
      title: "Support Students",
      text: "Marilyn will ensure that education funding is spent effectively to directly support student needs.",
      icon: "/images/desk-dark.svg",
      link: "/priorities#support",
    },
    {
      title: "Advancing Equity",
      text: "Marilyn will continue to bring forward ideas and support policies that provide better learning opportunities for students in NE Calgary.",
      icon: "/images/scale-dark.svg",
      link: "/priorities#equity",
    },
    {
      title: "Advocacy ",
      text: "Marilyn will ensure that education funding is spent effectively to directly support student needs.",
      icon: "/images/megaphone-dark.svg",
      link: "/priorities#advocacy",
    },
  ];

  return (
    <div className="priorities-list">
      <h4>Marilyn's Priorities <span className="underline by"/></h4>
      {priorities.map((priority) => (
        <PrioritiesItem
          title={priority.title}
          icon={priority.icon}
          text={priority.text}
          link={priority.link}
        />
      ))}
    </div>
  );
}

export default PrioritiesList;
