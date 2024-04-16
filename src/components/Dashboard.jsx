// Dashboard.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Dashboard.css";

const activeUser = "TEST_USER";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/users/logout", {
        withCredentials: true,
      });
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
