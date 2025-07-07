import React from 'react';
import "./contactview.css";

export default function ContactView() {
  return (
    <div className="contactview-container" data-aos="fade-up"  style={{ background: '#FEF8E5' }}>
      <h2 className="contactview-heading">Take a Virtual Tour of RSG Exports</h2>
      <div className="contactview-map">
        <iframe
          title="RSG Exports 360 View"
          src="https://www.google.com/maps/embed?pb=!4v1751869884989!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFg4TzdoMEFF!2m2!1d30.88090278933985!2d74.65411267242061!3f119.88746!4f0.11253999999999564!5f0.7820865974627469"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
