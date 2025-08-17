import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! 🎉');
  };

  return (
    <div className="contact-page">
      <h3>Contact Us</h3>
      <h1>Let's talk about<br />your project</h1>
      <p>Drop us a line through the form below. Or start a chat in the bottom right corner of the screen.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Email address*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <div className="checkbox-section">
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            I agree to receive other marketing communications from Survicate.
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="gdpr-note">
        <p>
          We’ll use your personal information only to communicate and handle your inquiry.
        </p>
        <p>
          From time to time, we would like to contact you about our products and services and other content that may interest you. If you consent to contact for this purpose, please tick below:
        </p>
        <p>
          You can unsubscribe at any time by responding to any of our communication or by sending a request to gdpr@survicate.com. <br />
          We will store and process your personal data on terms defined <a href="#">here</a>.
        </p>
      </div>
    </div>
  );
}

export default Contact;
