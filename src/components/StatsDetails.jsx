import React from "react";
import { Link } from "react-router-dom";
import "../styles/StatsDetails.css";

function StatsDetails() {
  return (
    <div>
      <h1>Stats Details</h1>
      <div className="back-buttons-container">
        <Link to="/stats">
          <button className="back-to-home">Back to stats</button>
        </Link>
        <Link to="/dashboard">
          <button className="back-to-home">Back to dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default StatsDetails;
