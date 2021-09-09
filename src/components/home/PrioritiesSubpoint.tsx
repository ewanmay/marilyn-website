import React from "react";

interface PrioritiesSubpointProps {
  title: string;
  subpoints: string[];
}

function PrioritiesSubpoint({ title, subpoints }: PrioritiesSubpointProps) {
  return (
    <div className="subpoint flex column">
      <b className="title nt">{title}</b>
      {subpoints.map((point) => (
        <div className="item">
          <span>
            <img src="/images/star.svg" alt="star" className="bullet" />
          </span>
          {point}
        </div>
      ))}
    </div>
  );
}

export default PrioritiesSubpoint;
