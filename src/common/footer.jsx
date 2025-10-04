import React from 'react';
import './footer.css';
import logoImg from '../assets/logo.png'; 
import brochurePdf1 from '../assets/RSGCATELOGUE.pdf';
import pdfIcon from '../assets/download-pdf.png';       

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Side - Logo and Navigation */}
      <div className="left-section">
        <div className="logo">
          <img src={logoImg} alt="RSG Exports Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/brand">Brands</a></li>
            <li><a href="/range">Range</a></li>
            <li><a href="/private">Private Labelling</a></li>
            <li><a href="/gallery">Gallery</a></li>
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
  <br />
  <a href="mailto:contact@rsgexports.com">contact@rsgexports.com</a>
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

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <p className="left">COPYRIGHT © {new Date().getFullYear()} RSG Exports, All Rights Reserved.</p>
        <p className="right">Designed & Developed By <a href="https://www.pitamaas.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>PITAMAAS</a></p>
      </div>

      {/* Floating PDF Icon only */}
      <div className="floating-icons">
        <a
          href={brochurePdf1}
          download
          className="floating-icon brochure"
          title="Download Brochure"
        >
          <img src={pdfIcon} alt="Download Brochure Icon" width={28} height={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
