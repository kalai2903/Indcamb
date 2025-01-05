import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      <div className="illustration">
        <img
          src="https://media.istockphoto.com/id/1305607788/vector/burnout-in-professional-life-emotional-collapse-concept-vector-tired-frustrated-employee-is.jpg?s=612x612&w=0&k=20&c=mLV-IQ89f8rFmHjhvtknaitT1hiYTdcGxnKLkCfmQmw="
          alt="Illustration"
        />
        <div className="info-boxes">
          <div className="info-box">
            <h3>Phone Number</h3>
            <p>+1 123 456 7890</p>
          </div>
          <div className="info-box">
            <h3>Email Address</h3>
            <p>contact@example.com</p>
          </div>
          <div className="info-box">
            <h3>Office Address</h3>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h2 className="form-title">Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Enter your number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
