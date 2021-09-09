import React from "react";

function CommitteeList() {
  const committees = [
    "Audit and Risk Committee",
    "CBE (CARES) Collaboration for Anti-Racism and Equity Supports",
    "High School Engagement Advisory Council",
    "Elders Advisory Council",
    "Trustee Remuneration Committee",
    "Agenda Planning Committee",
    "Strategic Dialogue and Public Engagement Committee",
    "City of Calgary Joint Use and Planning Elected Officials Coordinating Committee",
    "Alberta School Boards Association Board of Directors Alternate",
    "Chair, Metro School Boards Group",
  ];
  return (
    <div className="committee-list flex left column">
      <h4>She has served on:</h4>
      {committees.map((committee) => (
        <div className="item">
          <span className="bullet col-auto" />
          {committee}
        </div>
      ))}
    </div>
  );
}

export default CommitteeList;
