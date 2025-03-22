import React from "react";
import "./whitelabel.css";
import rsgca1 from "../../assets/RSGCA1.png"
import rsgca2 from "../../assets/RSGCA2.png";
import rsgca3 from "../../assets/RSGCA3.png";
import rsgca4 from "../../assets/RSGCA4.png";
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 576px)'
  });
  
  return (
    <div className="rice-packaging-container">
      <div className="rice-packaging-content">
        <div className="rice-packaging-section">
          <h2>Private Labelling Program</h2>
          <p className="tagline">Bring Your Brand to Life with RSG Exports</p>
          <p className="description1">
            At RSG Exports, we offer premium-quality rice with custom private
            labelling solutions tailored to your business. Whether launching a
            new brand or expanding your current product line, our flexible,
            scalable private labelling program gives you the tools to stand out
            in the market.
          </p>
        </div>

        <div className="rice-packaging-section">
          <h2>Packaging Options</h2>
          <p className="description1">
            We provide customizable packaging solutions to match your branding:
          </p>
          <ul className="options-list">
            <li>Sizes from 1kg to 30kg</li>
            <li>Materials: BOPP Bags, Jute Bags, and Non-Woven Bags</li>
            <li>
              Designed for durability, practicality, and an eye-catching
              aesthetic
            </li>
          </ul>
        </div>
      </div>

      <div className="main-div">
        <div className="showcase-container">
          {!isMobile ? (
            // Desktop view - original layout
            <div className="rice-packaging-showcase">
              <div className="package-item">
                <div 
                  className="package-image package-1kg" 
                  style={{ backgroundImage: `url(${rsgca1})` }}
                ></div>
                <div className="package-size">1kg</div>
              </div>
              <div className="package-item">
                <div 
                  className="package-image package-5kg" 
                  style={{ backgroundImage: `url(${rsgca2})` }}
                ></div>
                <div className="package-size">5kg</div>
              </div>
              <div className="package-item">
                <div 
                  className="package-image package-10kg" 
                  style={{ backgroundImage: `url(${rsgca3})` }}
                ></div>
                <div className="package-size">10kg</div>
              </div>
              <div className="package-item">
                <div 
                  className="package-image package-30kg" 
                  style={{ backgroundImage: `url(${rsgca4})` }}
                ></div>
                <div className="package-size">30kg</div>
              </div>
            </div>
          ) : (
            // Mobile view - 2x2 grid layout
            <div className="mobile-packaging-grid">
              <div className="mobile-row">
                <div className="package-item">
                  <div 
                    className="package-image package-1kg" 
                    style={{ backgroundImage: `url(${rsgca1})` }}
                  ></div>
                  <div className="package-size">1kg</div>
                </div>
                <div className="package-item">
                  <div 
                    className="package-image package-5kg" 
                    style={{ backgroundImage: `url(${rsgca2})` }}
                  ></div>
                  <div className="package-size">5kg</div>
                </div>
              </div>
              <div className="mobile-row">
                <div className="package-item">
                  <div 
                    className="package-image package-10kg" 
                    style={{ backgroundImage: `url(${rsgca3})` }}
                  ></div>
                  <div className="package-size">10kg</div>
                </div>
                <div className="package-item">
                  <div 
                    className="package-image package-30kg" 
                    style={{ backgroundImage: `url(${rsgca4})` }}
                  ></div>
                  <div className="package-size">30kg</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;