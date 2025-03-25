import React from 'react';
import './exportcountry.css';

function ExportDestinations() {
  const destinations = [
    {
      name: 'Saudi Arabia',
      image: require('../../assets/expo1.png'),
      animation: 'fade-up'
    },
    {
      name: 'UAE',
      image: require('../../assets/expo2.png'),
      animation: 'fade-down'
    },
    {
      name: 'United Kingdom',
      image: require('../../assets/expo3.png'),
      animation: 'fade-right'
    },
    {
      name: 'Germany',
      image: require('../../assets/expo4.png'),
      animation: 'fade-left'
    },
    {
      name: 'Nigeria',
      image: require('../../assets/expo5.png'),
      animation: 'zoom-in'
    },
    {
      name: 'Kenya',
      image: require('../../assets/expo6.png'),
      animation: 'zoom-out'
    },
  ];

  return (
    <div className="export-container">
      <h1 className="export-heading" data-aos="zoom-in">We proudly export our rice to:</h1>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-wrapper" data-aos={destination.animation}>
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
      <div className="footer-text1" data-aos="fade-up">and other international destinations.</div>
    </div>
  );
}

export default ExportDestinations;
