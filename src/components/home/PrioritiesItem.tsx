import React, { useState } from "react";
import PrioritiesSubpoint from "./PrioritiesSubpoint";

interface PrioritiesItemProps {
  icon: string;
  text: string;
  link: string;
  title: string;
  commitment: string;
  points: PrioritiesItemSection[];
}

interface PrioritiesItemSection {
  title: string;
  subpoints: string[];
}

function PrioritiesItem({
  icon,
  link,
  text,
  title,
  commitment,
  points,
}: PrioritiesItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="priorities flex column fill">
      <div className="header flex">
        <img src={icon} className="icon" alt="priority icon" />
        <h4 className="title">{title}</h4>
      </div>
      <div className="body">{text}</div>
      <div className="commitment">
        <span className="label nb wt">Marilyn's Commitment</span>
        <i>{commitment}</i>
      </div>
      <div className="link nt" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "READ LESS" : "READ MORE"}
      </div>
      {isOpen &&
        points.map(({ title, subpoints }) => (
          <PrioritiesSubpoint title={title} subpoints={subpoints} />
        ))}
    </div>
  );
}

export default PrioritiesItem;
