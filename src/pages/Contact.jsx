import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // new
  const [showMessage, setShowMessage] = useState(false);
// end new

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.name && formData.email && formData.message) {
      console.log(formData);
      setShowMessage(true); // Display the success message
  }
};

  return (
    <>
      <div className="header-copy">
        <h1>Contact Me</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-copy">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-copy">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-copy">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            className="form-field"
          ></textarea>
        </div>
   

      <button type="submit" className="submit-button">
        Submit
      </button>
  
    </form>

    {showMessage && (
        <div className="success-message">
          Success! A confirmation email has been sent to your inbox.
        </div>
    
    )}
    </>
  );
    }
