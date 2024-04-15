import React from "react";
import { Link } from "react-router-dom";

function DeleteAccount() {
  return (
    <div>
      <h1>Delete Account</h1>
      <h2 className="delete-acc-h2">ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?</h2>
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

export default DeleteAccount;
