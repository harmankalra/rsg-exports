import React from 'react';
import './frontproduct.css';

const ProductShowcase = () => {
  const products = [
    { id: 1, name: 'Sughandh', image: require('../../assets/08.png'), color: 'red' },
    { id: 2, name: 'Kesar', image: require('../../assets/07.png'), color: 'purple' },
    { id: 3, name: 'Silver', image: require('../../assets/05.png'), color: 'green' },
    { id: 4, name: 'Platinum', image: require('../../assets/03.png'), color: 'black' },
    { id: 5, name: 'Khushboo', image: require('../../assets/04.png'), color: 'red' },
    { id: 6, name: 'Mehak', image: require('../../assets/06.png'), color: 'red' },
    { id: 7, name: 'Diamond', image: require('../../assets/02.png'), color: 'red' },
    { id: 8, name: 'Premium', image: require('../../assets/09.png'), color: 'red' },
    { id: 9, name: 'Gold', image: require('../../assets/01.png'), color: 'red' }
  ];

  const ProductCard = ({ product }) => (
    <div className="bsa-product-card">
      <div className="bsa-product-image-container">
        <img src={product.image} alt={product.name} className="bsa-product-image" />
      </div>
      <div className="bsa-product-name">{product.name}</div>
    </div>
  );

  return (
    <div className="bsa-product-showcase-container"  data-aos="zoom-out-up">
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
