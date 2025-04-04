// Footer.jsx
import React from 'react';
import './footer.css';
import logoImg from '../assets/logo.png'; // Ensure you have the logo in your assets folder

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background image is set in CSS */}
      
      {/* Left Side - Logo and Navigation */}
      <div className="left-section">
        <div className="logo">
          <img src={logoImg} alt="RSG Exports Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/gallery">Private Labelling</a></li>
            <li><a href="/gallery">Gallery</a></li>
            {/* <li><a href="/blog">Blog</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Center - Address and Email */}
      <div className="center-section">
        <div className="address-block">
          <h3>Address</h3>
          <p>Near Patel Nagar, Faridkot</p>
          <p>Road, Ferozepur, Punjab, 152004</p>
        </div>
        
        <div className="email-block">
          <h3>Email</h3>
          <a href="mailto:rsgexportsfzr@gmail.com">rsgexportsfzr@gmail.com</a>
        </div>
      </div>
      
      {/* Right - Phone and Social Media */}
      <div className="right-section">
        <div className="phone-block">
          <h3>Phone</h3>
          <a href="tel:+919056022232">+91 9056022232</a>
        </div>
        <div className="social-block">
  <a href="https://www.instagram.com/rsgexports/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
  <a href="https://www.facebook.com/profile.php?id=100091896397617#" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
</div>

      </div>
      
      {/* Large RSG EXPORTS Text */}
      
      
      <div className="company-name">
        <h2>RSG EXPORTS</h2>
        <div className="copyright-bar">
        <p>COPYRIGHT © {new Date().getFullYear()} RSG Exports, All Rights Reserved.</p>

        <p>Designed & Developed By PITAMAAS</p>
      </div>
      </div>
      {/* Copyright Bar */}
     
    </footer>
  );
};

export default Footer;