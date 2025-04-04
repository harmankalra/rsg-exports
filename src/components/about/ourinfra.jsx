import React from 'react';
import './ourinfra.css';

const InfrastructureShowcase = () => {
  const infrastructureItems = [
    {
      id: 1,
      image: require('../../assets/fac2.png'),
      title: "State-of-the-art Milling Facility",
      className: "item mill",
      animation: "fade-up"
    },
    {
      id: 2,
      image: require('../../assets/fac3.png'),
      title: "22 High-Efficiency Dryers",
      className: "item dryers",
      animation: "fade-down"
    },
    {
      id: 3,
      image: require('../../assets/image-2.png'),
      title: "Customized Packaging & Branding Solutions",
      className: "item packaging",
      animation: "fade-right"
    },
    {
      id: 4,
      image: require('../../assets/image-1.png'),
      title: "Automated Grading & Sorting",
      className: "item grading",
      animation: "fade-left"
    },
    {
      id: 5,
      image: require('../../assets/image.png'),
      title: "Strict Quality Control",
      className: "item quality",
      animation: "zoom-in"
    }
  ];

  return (
    <div className="infrastructure-container">
      <h1 className="infrastructure-title" data-aos="zoom-in">Our Infrastructure</h1>
      <div className="infrastructure-grid">
        {infrastructureItems.map((item) => (
          <div 
            key={item.id} 
            className={item.className}
            style={{ backgroundImage: `url(${item.image})` }}
            data-aos={item.animation}
          >
            <div className="title-container">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureShowcase;
