import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== repeatPassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/users/register",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/register/success");
    } catch (error) {
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div>
      <div className="register-welcome">
        <h1>New here?</h1>
        <h2>Create a new account for free!</h2>
      </div>
      <div className="register-form">
        <form onSubmit={handleRegister}>
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
          <label htmlFor="password-repeat">Repeat Password:</label>
          <input
            type="password"
            id="password-repeat"
            name="password-repeat"
            placeholder="Enter password again..."
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
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

export default Register;
