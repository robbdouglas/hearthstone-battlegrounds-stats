import React from "react";
import { Link } from "react-router-dom";
import "../styles/AccountSettings.css";

function AccountSettings() {
  return (
    <div>
      <h1>Account Settings</h1>
      <h2>Change your account settings here!</h2>
      <div className="settings-container">
        <Link to="/change-username">
          <button>Change username</button>
        </Link>
        <Link to="/change-password">
          <button>Change password</button>
        </Link>
        <Link to="/change-email">
          <button>Change email address</button>
        </Link>
        <Link to="/delete-account">
          <button className="delete-acc">DELETE ACCOUNT</button>
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

export default AccountSettings;
