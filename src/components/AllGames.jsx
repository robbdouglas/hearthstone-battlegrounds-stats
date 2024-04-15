import React from "react";
import "../styles/AllGames.css";
import { Link } from "react-router-dom";

function AllGames() {
  return (
    <div>
      <h1>All Games</h1>
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

export default AllGames;
