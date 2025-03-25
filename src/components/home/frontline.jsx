import React from 'react';
import './frontline.css';

const FrontlineRice = () => {
  return (
    <div className="frontline-container">
      <div className="frontline-card">
        <div className="frontline-content">
          <div className="frontline-text" data-aos="zoom-in-right" data-aos-offset="300">
            <h1 className="frontline-title">FRONTLINE</h1>
            <h2 className="frontline-subtitle">PREMIUM BASMATI RICE</h2>

            <Feature title="100% Pure Rice Grains" description="Carefully selected for quality and consistency, ensuring a natural, wholesome taste." />
            <Feature title="No Preservatives" description="Our rice is free from artificial preservatives, ensuring a natural, fresh flavor." />
            <Feature title="Non-GMO" description="Grown using traditional methods, our rice is free from genetically modified organisms." />
            <Feature title="Gluten-Free" description="Naturally gluten-free, making it an ideal choice for those with gluten sensitivities or dietary restrictions." />
            <Feature title="Low in Fat" description="A healthy, low-fat food that provides energy without added oils or fats." />
          </div>

          <div className="frontline-visual" data-aos="zoom-in-left" data-aos-offset="300">
            <div className="rice-field-bg">
              <div className="product-images"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, description }) => (
  <div className="frontline-feature">
    <p>
      <strong>{title}:</strong> {description}
    </p>
  </div>
);

export default FrontlineRice;
