import React from "react";
import { Link } from "react-router-dom";

function RegisterSuccess() {
  return (
    <div>
      <h1>You successfully created a new account!</h1>
      <p>You can now log in with your new account.</p>

      <Link to="/" className="button">
        <button>Back to home</button>
      </Link>
    </div>
  );
}

export default RegisterSuccess;
