import React from "react";
import { Link } from "react-router-dom";

function ChangeEmail() {
  return (
    <div>
      <h1>Change email address</h1>
      <h2>
        Your current email address is:{" "}
        <span className="current-email">dawd@test.com</span>
      </h2>
      <div className="change-email-form">
        <form action="">
          <label htmlFor="new-email">New email address:</label>
          <input
            type="email"
            id="new-email"
            name="new-email"
            placeholder="Enter new email address..."
          ></input>
          <label htmlFor="new-email-again">Confirm new email address:</label>
          <input
            type="email"
            id="new-email-again"
            name="new-email-again"
            placeholder="Enter new email address again..."
          ></input>
          <input
            type="submit"
            value="Change email address"
            className="submit-button change-email"
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

export default ChangeEmail;
