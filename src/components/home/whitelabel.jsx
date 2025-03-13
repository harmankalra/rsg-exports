import React from 'react';
import './whitelabel.css';

const RicePackaging = () => {
  return (
    <div className="rice-packaging-container">
      <div className="rice-packaging-content">
        <div className="rice-packaging-section private-labelling">
          <h2>Private Labelling Program</h2>
          <p className="tagline">Bring Your Brand to Life with RSG Exports</p>
          <p className="description">
            At RSG Exports, we offer premium-quality rice with custom private
            labelling solutions tailored to your business. Whether launching a new
            brand or expanding your current product line, our flexible, scalable
            private labelling program gives you the tools to stand out in the market.
          </p>
        </div>

        <div className="rice-packaging-section packaging-options">
          <h2>Packaging Options</h2>
          <p className="tagline">We provide customizable packaging solutions to match your branding:</p>
          <ul className="options-list">
            <li>Sizes from 1kg to 30kg</li>
            <li>Materials: BOPP Bags, Jute Bags, and Non-Woven Bags</li>
            <li>Designed for durability, practicality, and an eye-catching aesthetic</li>
          </ul>
        </div>
      </div>

      <div className="showcase-container">
        <div className="rice-packaging-showcase">
       
          <div className="package-item">
            <div className="package-image package-1kg"></div>
            <p className="package-size">1kg</p>
          </div>
          <div className="package-item">
            <div className="package-image package-5kg"></div>
            <p className="package-size">5kg</p>
          </div>
          <div className="package-item">
            <div className="package-image package-10kg"></div>
            <p className="package-size">10kg</p>
          </div>
          <div className="package-item">
            <div className="package-image package-30kg"></div>
            <p className="package-size">30kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RicePackaging;