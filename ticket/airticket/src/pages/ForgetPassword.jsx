import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPasswordForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      navigate("/"); // Redirect to the home page
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    alert("Password reset instructions sent to your email!");
  };

  return (
    <div className="forgot-password-page">
      {/* Render Home component in the background */}
      <Home />
      <div className="overlay" onClick={handleOutsideClick}>
        <div className="forgot-password-form" ref={formRef}>
          <h2>Forgot Password</h2>
          <p>Enter your email to reset your password</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="form-input"
            />
            <button type="submit" className="submit-button">
              Send Reset Link
            </button>
          </form>
          <div className="form-links">
            <a href="/login">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
