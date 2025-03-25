import React, { useState } from 'react';
import './ambition.css'; // Import the separate CSS file

const RSGFoodsGrid = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Data for grid items with main text and subtext
  const gridItems = [
    {
      id: 1,
      title: 'Production Capacity',
      hoverMainText: '50 tons/hour',
      hoverSubText: 'with state of the art facilities.',
      image: require('../../assets/Component1.png')
    },
    {
      id: 2,
      title: 'Quality Assurance',
      hoverMainText: 'Rigorous quality control',
      hoverSubText: 'at every stage.',
      image: require('../../assets/Component1.png')
    },
    {
      id: 3,
      title: 'Global Reach',
      hoverMainText: 'Serving customers',
      hoverSubText: 'across international markets.',
      image: require('../../assets/Component1.png')
    },
    {
      id: 4,
      title: 'Customized Packaging',
      hoverMainText: 'Tailored packaging',
      hoverSubText: 'solutions for diverse needs.',
      image: require('../../assets/Component1.png')
    }
  ];

  return (
    <div className="rsg-container">
      <div className="rsg-container1">
      
        {/* Header Section */}
        <h1 className="rsg-header1">Sowing The Seeds Of Ambition</h1>
        
        {/* Two-column text section */}
        <div className="rsg-text-container">
          <div>
            <p className="rsg-paragraph">
              Starting as RSG Foods Pvt. Ltd., we embarked on a journey of growth guided 
              by visionary leadership. Built on customer trust and an unwavering 
              commitment to quality, the RSG Group expanded rapidly, adding a second 
              production unit and launching exports to meet the growing global demand for 
              premium rice.
            </p>
          </div>
          <div>
            <p className="rsg-paragraph">
              To further elevate our capabilities, we established RSG Exports Pvt. 
              Ltd., a cutting-edge milling unit with an impressive 50 TPH capacity. 
              Today, we proudly bring the finest rice from our fields to tables across 
              the world, serving both local and international markets with 
              excellence.
            </p>
          </div>
        </div>
        
        {/* Grid section */}
        <div className="rsg-grid-container">
          {gridItems.map((item) => (
            <GridItem 
              key={item.id} 
              item={item}
              isHovered={hoveredItem === item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const GridItem = ({ item, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div className="rsg-item-container">
      <div 
        className="rsg-image-container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img 
          src={item.image} 
          alt={item.title} 
          className="rsg-image"
        />
        
        {/* Hover overlay with separated text */}
        <div className={`rsg-overlay ${isHovered ? 'rsg-overlay-visible' : ''}`}>
          <div className="rsg-hover-box">
            <div className="rsg-hover-text-container">
              <p className="rsg-hover-main-text">{item.hoverMainText}</p>
              <p className="rsg-hover-sub-text">{item.hoverSubText}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Title below image */}
      <div className="rsg-title-container">
        <h3 className="rsg-title">{item.title}</h3>
      </div>
    </div>
  );
};

export default RSGFoodsGrid;
