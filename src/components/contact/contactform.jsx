import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    requirement: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      setFormData(prevState => ({
        ...prevState,
        resume: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate resume only when requirement is Career
      if (formData.requirement === 'Career' && !formData.resume) {
        alert("Please upload your resume for career inquiries.");
        setIsSubmitting(false);
        return;
      }

      const submissionData = new FormData();
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("phone", formData.phone);
      submissionData.append("message", formData.message);
      submissionData.append("requirement", formData.requirement);

      if (formData.requirement === 'Career' && formData.resume) {
        submissionData.append("resume", formData.resume);
      }

      const response = await fetch("https://dasmesh-mailer.ritaz.in/RSGExportsContact", {
      // const response = await fetch(" http://localhost:4008/RSGExportsContact", {

        method: "POST",
        body: submissionData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          requirement: '',
          resume: null
        });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="success-message" data-aos="fade-up">
        <div className="success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="success-title">Thank You!</h3>
        <p className="success-description">Your message has been sent successfully. We'll get back to you shortly.</p>
      </div>
    );
  }

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
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
            >
              <option value="">Requirement For</option>
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
              <option value="Career">Career</option>
            </select>
          </div>

          {formData.requirement === 'Career' && (
            <div className="form-group">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
