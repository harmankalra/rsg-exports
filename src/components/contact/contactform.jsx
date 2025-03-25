import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="form-container" data-aos="fade-up">
      <div className="form-content">
        <h2 className="form-title" data-aos="fade-up">Have A Question? Let's Connect!</h2>
        
        <form onSubmit={handleSubmit} data-aos="fade-up">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          
          <div className="form-group" data-aos="fade-up">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          
          <div className="form-group" data-aos="fade-up">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          
          <div className="form-group" data-aos="fade-up">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button" data-aos="fade-up">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
