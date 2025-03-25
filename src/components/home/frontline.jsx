import React from 'react';
import './frontline.css';

const FrontlineRice = () => {
  return (
    <div className="frontline-container">
      <div className="frontline-card">
        <div className="frontline-content">
          <div className="frontline-text" data-aos="zoom-in-right" data-aos-offset="300" >
            <h1 className="frontline-title">FRONTLINE</h1>
            <h2 className="frontline-subtitle">PREMIUM BASMATI RICE</h2>
            
            <div className="frontline-feature">
              <p><strong>100% Pure Rice Grains:</strong> Carefully selected for quality and consistency, ensuring a natural, wholesome taste.</p>
            </div>
            
            <div className="frontline-feature">
              <p><strong>No Preservatives:</strong> Our rice is free from artificial preservatives, ensuring a natural, fresh flavor.</p>
            </div>
            
            <div className="frontline-feature">
              <p><strong>Non-GMO:</strong> Grown using traditional methods, our rice is free from genetically modified organisms.</p>
            </div>
            
            <div className="frontline-feature">
              <p><strong>Gluten-Free:</strong> Naturally gluten-free, making it an ideal choice for those with gluten sensitivities or dietary restrictions.</p>
            </div>
            
            <div className="frontline-feature">
              <p><strong>Low in Fat:</strong> A healthy, low-fat food that provides energy without added oils or fats.</p>
            </div>
          </div>
          
          <div className="frontline-visual" data-aos="zoom-in-left" data-aos-offset="300">
            <div className="rice-field-bg">
              <div className="product-images">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontlineRice;