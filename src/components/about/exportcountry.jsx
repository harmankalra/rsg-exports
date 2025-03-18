// ExportDestinations.jsx
import React from 'react';
import './exportcountry.css';

function ExportDestinations() {
  const destinations = [
    {
      name: 'Saudi Arabia',
      image: require('../../assets/expo1.png'),
    },
    {
      name: 'UAE',
      image: require('../../assets/expo2.png'),
    },
    {
      name: 'United Kingdom',
      image: require('../../assets/expo3.png'),
    },
    {
      name: 'Germany',
      image: require('../../assets/expo4.png'),
    },
    {
      name: 'Nigeria',
      image: require('../../assets/expo5.png'),
    },
    {
      name: 'Kenya',
      image: require('../../assets/expo6.png'),
    },
  ];

  return (
    <div className="export-container">
      <h1 className="export-heading">We proudly export our rice to:</h1>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-wrapper">
            <div className="destination-name">{destination.name}</div>
            <div className="destination-card">
              <div 
                className="destination-image" 
                style={{ backgroundImage: `url(${destination.image})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-text1">and other international destinations.</div>
    </div>
  );
}

export default ExportDestinations;