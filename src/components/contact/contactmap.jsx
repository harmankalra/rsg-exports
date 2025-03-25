import React from 'react';
import './contactmap.css';

const ContactSection = () => {
  return (
    <div className="contact-container" data-aos="fade-up">
      <div className="contact-header" data-aos="fade-up">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-content">
        <div className="contact-content1">
          <div className="contact-info" data-aos="fade-up">
            <div className="contact-message" data-aos="fade-up">
              <h2>We'd Love To Hear From You!</h2>
              <p>
                Whether you have a business inquiry, want to request a sample, or simply
                wish to learn more about our premium rice offerings, the team at RSG Exports
                is here to assist you.
              </p>
            </div>

            <div className="contact-details" data-aos="fade-up">
              <div className="contact-item">
                <label>Email</label>
                <div className="contact-value">Rsgexportsfzr@Gmail.Com</div>
              </div>

              <div className="contact-item">
                <label>Phone/WhatsApp</label>
                <div className="contact-value">+91 90560 22232</div>
              </div>

              <div className="contact-item">
                <label>Address</label>
                <div className="contact-value">
                  RSG Exports Pvt. Ltd., Near Patel Nagar,<br />
                  Faridkot Road, Firozpur, Punjab 152004
                </div>
              </div>
            </div>
          </div>

          <div className="map-container" data-aos="fade-up">
            <div className="map-placeholder">
              <iframe
                title="RSG Exports Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1712.1036014152357!2d74.65287443967286!3d30.880864099999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919e741701e71a9%3A0xa0ef65e42e9400bc!2sRSG%20Exports%20Pvt.%20Ltd.%20(Rice%20Millers%20%26%20Exporters%20in%20India)%20%7C%7C%20Best%20Rice%20Mill%2C%20Rice%20Exporter%2C%20Rice%20Manufacturer!5e0!3m2!1sen!2sin!4v1741860027012!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
