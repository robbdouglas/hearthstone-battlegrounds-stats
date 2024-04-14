import React from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div>
      <div className="welcome-div">
        <h1>Welcome!</h1>
        <h2>Do you want to create a new account or do you want to sign in?</h2>
      </div>
      <div className="button-div">
        <button className="button">Create Account</button>
        <button className="button">Sign In</button>
      </div>
    </div>
  );
}

export default LandingPage;
