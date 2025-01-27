import React, { useState } from 'react';
import './Help.css'; // Add custom CSS for styling

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Code Help Request Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', issue: '', description: '' });
  };

  return (
    <div className="code-help-container">
      <h1>Help</h1>
      <p>If you need help , please fill out the form below, and we will assist you as soon as possible!</p>

      {submitted && (
        <p className="success-message">
          Thank you for reaching out! We will review your request and get back to you shortly.
        </p>
      )}

      <form onSubmit={handleSubmit} className="code-help-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="issue">Issue Title</label>
          <input
            type="text"
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Enter the issue title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your issue in detail"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Help;
