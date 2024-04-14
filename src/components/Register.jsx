import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div>
      <div className="register-welcome">
        <h1>New here?</h1>
        <h2>Create a new account for free!</h2>
      </div>
      <div className="register-form">
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username..."
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address..."
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password..."
            required
          />
          <label htmlFor="password-repeat">Repeat Password:</label>
          <input
            type="password"
            id="password-repeat"
            name="password-repeat"
            placeholder="Enter password again..."
            required
          />

          <button type="submit">Register</button>
        </form>
        <div className="home-button-div">
          <Link to="/" className="home-button button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
