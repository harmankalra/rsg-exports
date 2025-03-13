// ProductShowcase.jsx
import React, { useEffect } from 'react';
import './frontproduct.css';

const ProductShowcase = () => {
  // Products data array
  const products = [
    {
      id: 1,
      name: 'Sughandh',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741765419/08_okwrnn.png',
      color: 'red'
    },
    {
      id: 2,
      name: 'Kesar',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741763751/07_moje1q.png',
      color: 'purple'
    },
    {
      id: 3,
      name: 'Silver',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741763722/10_x6gx30.png',
      color: 'green'
    },
    {
      id: 4,
      name: 'Platinum',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741763696/12_whpbqt.png',
      color: 'black'
    },
    {
      id: 5,
      name: 'Khushboo',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741765302/9_xlfnvq.png',
      color: 'red'
    },
    {
      id: 6,
      name: 'Mehak',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741763536/13_uuoxco.png',
      color: 'red'
    },
    {
      id: 7,
      name: 'Diamond',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741763489/6_zjdiij.png',
      color: 'red'
    },
    {
      id: 8,
      name: 'Premium',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741765446/11_aumzwz.png',
      color: 'red'
    },
    {
      id: 9,
      name: 'Gold',
      image: 'https://res.cloudinary.com/dznnm9b1j/image/upload/v1741765064/7_t52ufo.png',
      color: 'red'
    }
  ];

  // Initialize Owl Carousel using jQuery after component mounts
  useEffect(() => {
    // Fix for ESLint: Check for jQuery and define it locally
    const $ = window.jQuery || window.$;
    
    // Check if jQuery is available
    if (!$) {
      console.error('jQuery is not loaded - Owl Carousel cannot be initialized');
      return;
    }
    
    // Initialize Owl Carousel regardless of screen size
    $(document).ready(function() {
      $(".bsa-rice-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navClass: ["bsa-owl-prev", "bsa-owl-next"],
        navText: ["<", ">"],
        dotsClass: "bsa-owl-dots",
        dotClass: "bsa-owl-dot",
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          600: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 5
          }
        }
      });
    });
    
    return () => {
      // Destroy carousel on component unmount
      if ($) {
        $(".bsa-rice-carousel").trigger('destroy.owl.carousel');
      }
    };
  }, []);

  // Product card component
  const ProductCard = ({ product }) => (
    <div className="bsa-product-card">
      <div className="bsa-product-image-container">
        <img src={product.image} alt={product.name} className="bsa-product-image" />
      </div>
      <div className="bsa-product-name">{product.name}</div>
    </div>
  );

  return (
    <div className="bsa-product-showcase-container">
      {/* Owl Carousel for both mobile and desktop */}
      <div className="bsa-carousel-container">
        <div className="bsa-rice-carousel owl-carousel owl-theme">
          {products.map(product => (
            <div key={product.id} className="bsa-carousel-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="bsa-view-more-container">
          <button className="bsa-view-more-btn">View More</button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;