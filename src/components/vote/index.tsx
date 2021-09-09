import React from "react";
import Button, { ButtonTypeE } from "../common/Button";
import "./Vote.scss";

function Vote() {
  return (
    <div className="vote flex center">
      <div className=" col-lg-6 col-10">
        <h4 className="flex column center">
          Voter information <span className="underline" />
        </h4>
        <h5 className="flex left">
          For information on polling station location and ward boundaries,
          please visit Information for Voters on the City of Calgary website.
        </h5>
        <a
          className="flex"
          href="https://www.calgary.ca/election/information-for-voters/when-and-where-to-vote.html
        "
        >
          https://www.calgary.ca/election/information-for-voters/when-and-where-to-vote.html
        </a>

        <div className="map-container">
          <h4 className="flex column center title">Ward Map</h4>
          <div className="flex center">
            <Button onClick={() => {}} variant={ButtonTypeE.OUTLINE}>
              <a
                className="flex"
                target="_blank"
                href="https://thecityofcalgary.maps.arcgis.com/apps/instant/lookup/index.html?appid=b0ca20479c52427196adbdf101264cd7"
                rel="noreferrer"
              >
                Find my Ward
              </a>
            </Button>
            <img src="/images/map.svg" alt="ward map" className="map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
