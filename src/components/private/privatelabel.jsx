import React from 'react';
import './private.css';

export default function WhiteLabelingPage() {
  return (
    <div className="white-labeling-container">
      {/* Top Banner Image */}
      {/* <div className="banner">
        <img
          src={require("../../assets/BannerImage.svg")}
          alt="Private Labelling Banner"
          width={1920}
          height={400}
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">PRIVATE LABELLING PROGRAM</h1>
        </div>
      </div> */}

      <div className="content">
        <div className="section-header">PRIVATE LABELLING PROGRAM</div>

        {/* Introduction Section */}
        <div className="intro-section">
          <p>
            At RSG Exports, we transform your vision into reality with premium-quality rice and tailored private
            labelling solutions. Whether you're starting a new venture or enhancing your existing brand, our program
            offers the flexibility and expertise you need to stand out.
          </p>
        </div>

        {/* Packaging Options */}
        <div className="section">
          <div className="section-header">PACKAGING OPTIONS</div>

          <p className="section-subtext">We provide customizable solutions to match your branding needs:</p>

          <div className="packages-grid">
            {/* Package 1 */}
            <div className="package-card" data-aos="fade-up" data-aos-duration="1000">
              <div className="package-image1-container">
                <img
                  src={require("../../assets/BoppBag.png")}
                  alt="BOPP Bag Package"
                  width={300}
                  height={300}
                  className="package-image1"
                />
              </div>
              <h3>BOPP Bags</h3>
              <p>
                Premium biaxially oriented polypropylene bags offering excellent moisture resistance and vibrant
                printing options.
              </p>
              <div className="package-size1">Available in 1kg to 30kg</div>
            </div>

            {/* Package 2 */}
            <div className="package-card" data-aos="fade-up" data-aos-duration="1200">
              <div className="package-image1-container">
                <img
                  src={require("../../assets/Jute BAg .png")}
                  alt="Jute Bag Package"
                  width={300}
                  height={300}
                  className="package-image1"
                />
              </div>
              <h3>Jute Bags</h3>
              <p>
                Eco-friendly and biodegradable jute bags that provide a natural, premium look for your rice products.
              </p>
              <div className="package-size1">Available in 5kg to 30kg</div>
            </div>

            {/* Package 3 */}
            <div className="package-card" data-aos="fade-up" data-aos-duration="1400">
              <div className="package-image1-container">
                <img
                  src={require("../../assets/Non Woven Bag.png")}
                  alt="Non-Woven Bag Package"
                  width={300}
                  height={300}
                  className="package-image1"
                />
              </div>
              <h3>Non-Woven Bags</h3>
              <p>Durable and reusable non-woven fabric bags that combine strength with eco-friendly properties.</p>
              <div className="package-size1">Available in 1kg to 20kg</div>
            </div>

            {/* Package 4 */}
            <div className="package-card" data-aos="fade-up" data-aos-duration="1600">
              <div className="package-image1-container">
                <img
                  src={require("../../assets/Custom Bag.png")}
                  alt="Custom Package"
                  width={300}
                  height={300}
                  className="package-image1"
                />
              </div>
              <h3>Custom Packaging</h3>
              <p>Tailored packaging solutions designed to your exact specifications and branding requirements.</p>
              <div className="package-size1">Available in all sizes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
