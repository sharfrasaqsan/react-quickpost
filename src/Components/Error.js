import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oops! The page you are looking for cannot be found.
      </p>
      <Link className="error-link">Return to Home</Link>
    </div>
  );
};

export default Error;
