import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } catch (error) {
      setError("Username or password is incorrect!");
    }
  };

  return (
    <div>
      <div className="login-welcome">
        <h1>Already have an account?</h1>
        <h2>Sign in by entering your account data!</h2>
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <div className="home-button-div">
          <Link to="/" className="home-button">
            <button>Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
