import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div>
      <div className="login-welcome">
        <h1>Already have an account?</h1>
        <h2>Sign in by entering your account data!</h2>
      </div>
      <div className="login-form">
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username..."
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

          <button type="submit">Login</button>
        </form>
        <Link to="/" className="home-button button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
