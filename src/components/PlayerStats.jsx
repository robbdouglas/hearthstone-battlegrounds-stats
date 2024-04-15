import React from "react";
import { Link } from "react-router-dom";
import "../styles/PlayerStats.css";

function PlayerStats() {
  return (
    <div>
      <div className="player-stats-container">
        <h1>Player Stats</h1>
        <p>Total games played:</p>
        <p>Total wins:</p>
        <p>Win rate:</p>
        <p>Total 1st places:</p>
        <p>First place rate:</p>
        <p>Average placement:</p>
      </div>
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

export default PlayerStats;
