import React from "react";
import "./partnerwithus.css";

export default function PartnerSection() {
  return (
    <div className="partner-section-container">
      {/* Why Partner Section */}
      <section id="why-partner" className="why-partner-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="section-container">
          <div className="section-header1" data-aos="fade-up" data-aos-duration="1200">
            <h2 className="section-title">
              Why Partner with RSG Exports?
              <div className="section-title-underline"></div>
            </h2>
            <p className="section-description">
              Experience the benefits of working with a trusted partner in rice exports
            </p>
          </div>

          <div className="feature-card-container">
            <FeatureCard
              icon={<AwardIcon />}
              title="Decades of Expertise"
              description="Trusted knowledge in rice production and private labelling."
              aosDelay="0"
            />
            <FeatureCard
              icon={<PackageIcon />}
              title="Tailored Branding"
              description="Custom packaging reflecting your brand identity."
              aosDelay="200"
            />
            <FeatureCard
              icon={<ChartIcon />}
              title="Consistent Quality"
              description="Meticulous quality control for every batch."
              aosDelay="400"
            />
            <FeatureCard
              icon={<FactoryIcon />}
              title="Flexible Production"
              description="Scalable solutions for small-scale and bulk orders."
              aosDelay="600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="section-container">
          <div className="cta-grid">
            <div className="cta-info" data-aos="fade-right" data-aos-duration="1200">
              <h2 className="cta-title">Get Started with Your Private Labelling Program Today!</h2>
              <p className="cta-description">
                Contact us to discuss your custom packaging requirements and take your brand to the next level. Our team
                is ready to help you create a product that stands out in the market.
              </p>
              <div className="cta-button-group">
                <button className="cta-primary-button">
                  <SendIcon /> Contact Us
                </button>
                <button className="cta-outline-button">Download Brochure</button>
              </div>
            </div>
            <div className="cta-form-container" data-aos="fade-left" data-aos-duration="1200">
              <div className="form-card">
                <h3 className="form-title">Contact Form</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, aosDelay }) {
  return (
    <div
      className="feature-card"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={aosDelay}
    >
      <div className="icon-container">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="success-message" data-aos="fade-up" data-aos-duration="1000">
        <div className="success-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="success-title">Thank You!</h3>
        <p className="success-description">Your message has been sent successfully. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group" data-aos="fade-up" data-aos-delay="0">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" className="form-input" placeholder="Your name" required />
      </div>

      <div className="form-group" data-aos="fade-up" data-aos-delay="100">
        <label htmlFor="email" className="form-label">Emaillllll</label>
        <input id="email" type="email" className="form-input" placeholder="Your email" required />
      </div>

      <div className="form-group" data-aos="fade-up" data-aos-delay="200">
        <label htmlFor="company" className="form-label">Company</label>
        <input id="company" className="form-input" placeholder="Your company" />
      </div>

      <div className="form-group" data-aos="fade-up" data-aos-delay="300">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          className="form-input form-textarea"
          placeholder="Tell us about your private labelling needs"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <SendIcon /> Send Message
          </>
        )}
      </button>
    </form>
  );
}

// Icon Components
function AwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
      <path d="M17 18h1"></path>
      <path d="M12 18h1"></path>
      <path d="M7 18h1"></path>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}
