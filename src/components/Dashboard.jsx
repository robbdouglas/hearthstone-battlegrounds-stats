import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const activeUser = "TEST_USER";

function Dashboard() {
  return (
    <div>
      <div className="dashboard-welcome">
        <h1>Dashboard</h1>
        <h2>Welcome {activeUser}!</h2>
      </div>
      <div className="ng-stats-div">
        <Link to="/new-game-form">
          <button className="new-game-btn">New Game</button>
        </Link>
        <Link to="/stats">
          <button className="stats-btn">Stats</button>
        </Link>
      </div>
      <div>
        <Link to="/account-settings">
          <button className="account-settings-btn">Account Settings</button>
        </Link>
      </div>
      <div>
        <Link to="/">
          <button className="home-button">Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
