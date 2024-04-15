import React from "react";
import { Link } from "react-router-dom";

function ChangeUserName() {
  return (
    <div>
      <h1>Change username</h1>
      <h2>
        Your current username is:{" "}
        <span className="current-username">TEST_USER</span>
      </h2>
      <div className="new-username-form">
        <form action="">
          <label htmlFor="new-username">New username:</label>
          <input
            type="text"
            id="new-username"
            name="new-username"
            placeholder="Enter new username"
          ></input>
          <input
            type="submit"
            value="Change username"
            className="submit-button change-username"
          ></input>
        </form>
      </div>
      <div className="back-buttons-container">
        <Link to="/account-settings">
          <button className="back-to-home">Back to account settings</button>
        </Link>
        <Link to="/dashboard">
          <button className="back-to-home">Back to dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default ChangeUserName;
