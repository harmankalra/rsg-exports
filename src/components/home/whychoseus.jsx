import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './whychoseus.css';

const RSGExports = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="rsg-container1">
      <div className="rsg-header">
        <div className="rsg-title-section">
          <h2 className="rsg-title1" data-aos="zoom-out-right">Why RSG Exports ?</h2>
          <p className="rsg-description" data-aos="zoom-out-right">
            The Luxe Grain is a premium blog showcasing RSG Exports' rice as a symbol 
            of luxury and quality. It highlights heritage, superior craftsmanship, and culinary 
            excellence through engaging stories, chef interviews, and global success insights.
          </p>
          <p className="rsg-description" data-aos="zoom-out-right">
            With 22 high-quality dryers, we maintain optimal moisture levels, ensuring superior 
            quality, longer shelf life, and large-scale production efficiency.
          </p>
        </div>
        <div className="rsg-features-grid">
          <div className="rsg-feature-card" data-aos="fade-up">
            <div className="rsg-feature-icon icon-quality"></div>
            <p className="rsg-feature-text">Quality & Heritage</p>
          </div>
          <div className="rsg-feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="rsg-feature-icon icon-sustainability"></div>
            <p className="rsg-feature-text">Sustainability & Ethics</p>
          </div>
          <div className="rsg-feature-card" data-aos="fade-up" data-aos-delay="400">
            <div className="rsg-feature-icon icon-innovation"></div>
            <p className="rsg-feature-text">Innovation & Technology</p>
          </div>
          <div className="rsg-feature-card" data-aos="fade-up" data-aos-delay="600">
            <div className="rsg-feature-icon icon-global"></div>
            <p className="rsg-feature-text">Global Footprint</p>
          </div>
          <div className="rsg-feature-card" data-aos="fade-up" data-aos-delay="800">
            <div className="rsg-feature-icon icon-health"></div>
            <p className="rsg-feature-text">Health & Wellness</p>
          </div>
          <div className="rsg-feature-card" data-aos="fade-up" data-aos-delay="1000">
            <div className="rsg-feature-icon icon-culinary"></div>
            <p className="rsg-feature-text">Culinary Experience</p>
          </div>
        </div>
      </div>

      <div className="rsg-images-grid">
        <div className="rsg-image img1" data-aos="fade-up"></div>
        <div className="rsg-image img2" data-aos="fade-up" data-aos-delay="400"></div>
        <div className="rsg-image img3" data-aos="fade-up" data-aos-delay="400"></div>
        <div className="rsg-image img4" data-aos="fade-up" data-aos-delay="400"></div>
        <div className="rsg-image img5" data-aos="fade-up" data-aos-delay="400"></div>
      </div>
    </div>
  );
};

export default RSGExports;
