// FoundersMessage.jsx
import React from 'react';
import './foundermessage.css';

const FoundersMess = () => {
  return (
    <div className="founders-message-container">
      <h1 className="founders-message-title">Founder's Message</h1>
      
      <div className="founders-message-content">
        <div className="founders-image-background">
          {/* Background image is applied via CSS */}
        </div>
        
        <div className="founders-text-container">
          <blockquote className="founders-quote">
            "At RSG Exports, we believe that quality is not just a promise, but a tradition. 
            Our journey from Punjab's fertile fields to global markets reflects our unwavering 
            commitment to excellence and customer satisfaction."
          </blockquote>
          
          <div className="founders-info">
            <h2 className="founders-name">Mr. Naresh Garg</h2>
            <p className="founders-title">CEO & Managing Director</p>
          </div>
          
          <p className="founders-bio">
            A visionary at the helm, Naresh leads with dedication and foresight, shaping 
            the company's strategic direction and fostering long-term partnerships. His 
            leadership has been instrumental in establishing RSG Exports as a trusted 
            name in the rice industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoundersMess;