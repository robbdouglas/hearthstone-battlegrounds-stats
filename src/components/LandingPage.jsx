// LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom"; // Importiere Link aus react-router-dom
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div>
      <div className="welcome-div">
        <h1>Welcome!</h1>
        <h2>Do you want to create a new account or do you want to sign in?</h2>
      </div>
      <div className="button-div">
        <Link to="/register" className="button">
          Register
        </Link>
        <Link to="/login" className="button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
