// LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom"; // Importiere Link aus react-router-dom
import "../styles/LandingPage.css";
import logoImg from "../assets/images/hs-logo.png";

function LandingPage() {
  return (
    <div className="landing-page-box">
      <div className="welcome-div">
        {/* <img src={logoImg} alt="Battlegrounds Stats Logo" className="logo" /> */}
        <h1>Hearthstone Battlegrounds Stats</h1>
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
