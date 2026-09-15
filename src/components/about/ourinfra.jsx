import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import './ourinfra.css';

import infra1 from '../../assets/infra/1.webp';
import infra2 from '../../assets/infra/2.webp';
import infra3 from '../../assets/infra/3.webp';
import infra4 from '../../assets/infra/4.webp';
import infra5 from '../../assets/infra/5.webp';
import infra6 from '../../assets/infra/6.webp';
import infra7 from '../../assets/infra/7.webp';
import infra8 from '../../assets/infra/8.webp';
import infra9 from '../../assets/infra/9.webp';
import infra10 from '../../assets/infra/10.webp';

const infraImages = [
  infra1, infra2, infra3, infra4, infra5,
  infra6, infra7, infra8, infra9, infra10
];

const InfrastructureShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === infraImages.length - 1 ? 0 : prev + 1));
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? infraImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="infrastructure-container">
      <h2 className="infrastructure-title" data-aos="zoom-in">Our Infrastructure</h2>

      {/* Infrastructure Gallery Section */}
      <div className="rsg-infra-gallery">
        {/* Row 1: Images 1 & 2 */}
        <div className="infra-row infra-row-2">
          <div className="infra-card" data-aos="fade-up" onClick={() => openLightbox(0)}>
            <img src={infra1} alt="Infrastructure 1" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
          <div className="infra-card" data-aos="fade-up" data-aos-delay="150" onClick={() => openLightbox(1)}>
            <img src={infra2} alt="Infrastructure 2" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 2: Images 3, 4, 5 & 6 */}
        <div className="infra-row infra-row-4">
          <div className="infra-card" data-aos="fade-up" data-aos-delay="200" onClick={() => openLightbox(2)}>
            <img src={infra3} alt="Infrastructure 3" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
          <div className="infra-card" data-aos="fade-up" data-aos-delay="300" onClick={() => openLightbox(3)}>
            <img src={infra4} alt="Infrastructure 4" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
          <div className="infra-card" data-aos="fade-up" data-aos-delay="400" onClick={() => openLightbox(4)}>
            <img src={infra5} alt="Infrastructure 5" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
          <div className="infra-card" data-aos="fade-up" data-aos-delay="500" onClick={() => openLightbox(5)}>
            <img src={infra6} alt="Infrastructure 6" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 3: Images 7 & 8 */}
        <div className="infra-row infra-row-2">
          <div className="infra-card" data-aos="fade-up" data-aos-delay="600" onClick={() => openLightbox(6)}>
            <img src={infra7} alt="Infrastructure 7" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
          <div className="infra-card" data-aos="fade-up" data-aos-delay="700" onClick={() => openLightbox(7)}>
            <img src={infra8} alt="Infrastructure 8" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 4: Images 9 & 10 */}
        <div className="infra-row infra-row-2">
          <div className="infra-card" data-aos="fade-up" data-aos-delay="800" onClick={() => openLightbox(8)}>
            <img src={infra9} alt="Infrastructure 9" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
          <div className="infra-card" data-aos="fade-up" data-aos-delay="900" onClick={() => openLightbox(9)}>
            <img src={infra10} alt="Infrastructure 10" />
            <div className="click-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} title="Close">&times;</button>
            <button className="lightbox-arrow lightbox-prev" onClick={showPrev} title="Previous">&#10094;</button>

            <div className="lightbox-img-wrapper">
              <img src={infraImages[selectedIndex]} alt={`Infrastructure ${selectedIndex + 1}`} />
              <div className="lightbox-counter">{selectedIndex + 1} / {infraImages.length}</div>
            </div>

            <button className="lightbox-arrow lightbox-next" onClick={showNext} title="Next">&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfrastructureShowcase;
