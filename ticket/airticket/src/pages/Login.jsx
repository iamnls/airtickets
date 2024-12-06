import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import "./LoginForm.css";

const LoginForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      navigate("/"); // Redirect to the home page
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    alert("Logged in successfully!");
  };

  return (
    <div className="login-page">
      {/* Render Home component in the background */}
      <Home />
      <div className="overlay" onClick={handleOutsideClick}>
        <div className="login-form" ref={formRef}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email / Phone Number"
              required
              className="form-input"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="form-input"
            />
            <div className="form-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          <div className="form-links">
            <a href="/forgot-password">Forgot Password?</a>
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
