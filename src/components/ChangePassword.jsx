import React from "react";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div>
      <h1>Change password</h1>
      <div className="change-password-form">
        <form action="">
          <label htmlFor="old-password">Old password:</label>
          <input type="password" name="old-password" id="old-password"></input>
          <label htmlFor="new-password">New password:</label>
          <input type="password" name="new-password" id="new-password"></input>
          <label htmlFor="confirm-password">Confirm new password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          ></input>
          <input
            type="submit"
            value="Change password"
            className="submit-button"
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

export default ChangePassword;
