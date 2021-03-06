import React from "react";
import "../style/Newsfeed.css";
import LineGraph from "./LineGraph";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="Newsfeed__container">
        <div className="newsfeed__charSection">
          <div className="newsfeed__portfolio">
            <h1>$114,323.66</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;

// Newsfeed;
// Newsfeed__container;
// newsfeed__charSection;
//  - newsfeed__portfolio;
//  - newsfeed__chart
