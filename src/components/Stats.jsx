import React from "react";
import "../styles/Stats.css";
import LastFiveGamesBox from "./LastFiveGamesBox";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div>
      <h1>Stats</h1>
      <h2>Last 5 Games:</h2>
      <div className="last-five-games-container">
        <LastFiveGamesBox />
        <LastFiveGamesBox />
        <LastFiveGamesBox />
        <LastFiveGamesBox />
        <LastFiveGamesBox />
      </div>
      <div className="stats-buttons-box">
        <Link to="/all-games">
          <button>All Games</button>
        </Link>
        <Link to="/player-stats">
          <button>Player Stats</button>
        </Link>
        <Link to="/stats-details">
          <button className="back-to-home">Details</button>
        </Link>
      </div>
      <div className="back-buttons-container">
        <Link to="/dashboard">
          <button className="back-to-home">Back to dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Stats;
