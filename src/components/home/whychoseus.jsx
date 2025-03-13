import React from 'react';
import './whychoseus.css';

const RSGExports = () => {
  return (
    <div className="rsg-container1">
      <div className="rsg-header">
        <div className="rsg-title-section">
          <h1 className="rsg-title1">Why RSG Exports ?</h1>
          <p className="rsg-description">
            The Luxe Grain is a premium blog showcasing RSG Exports' rice as a symbol 
            of luxury and quality. It highlights heritage, superior craftsmanship, and culinary 
            excellence through engaging stories, chef interviews, and global success insights.
          </p>
          <p className="rsg-description ">
            With 22 high-quality dryers, we maintain optimal moisture levels, ensuring superior 
            quality, longer shelf life, and large-scale production efficiency.
          </p>
        </div>
        <div className="rsg-features-grid">
          <div className="rsg-feature-card">
            <div className="rsg-feature-icon icon-quality"></div>
            <p className="rsg-feature-text">Quality & Heritage</p>
          </div>
          <div className="rsg-feature-card">
            <div className="rsg-feature-icon icon-sustainability"></div>
            <p className="rsg-feature-text">Sustainability & Ethics</p>
          </div>
          <div className="rsg-feature-card">
            <div className="rsg-feature-icon icon-innovation"></div>
            <p className="rsg-feature-text">Innovation & Technology</p>
          </div>
          <div className="rsg-feature-card">
            <div className="rsg-feature-icon icon-global"></div>
            <p className="rsg-feature-text">Global Footprint</p>
          </div>
          <div className="rsg-feature-card">
            <div className="rsg-feature-icon icon-health"></div>
            <p className="rsg-feature-text">Health & Wellness</p>
          </div>
          <div className="rsg-feature-card">
            <div className="rsg-feature-icon icon-culinary"></div>
            <p className="rsg-feature-text">Culinary Experience</p>
          </div>
        </div>
      </div>
      
      <div className="rsg-images-grid">
        <div className="rsg-image img1"></div>
        <div className="rsg-image img2"></div>
        <div className="rsg-image img3"></div>
        <div className="rsg-image img4"></div>
        <div className="rsg-image img5"></div>
      </div>
    </div>
  );
};

export default RSGExports;