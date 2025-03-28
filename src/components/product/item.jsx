import React from 'react';
import './item.css';

// Sample rice product data
const riceProducts = [
    {
        id: 1,
        title: 'Gold Premium Basmati Rice',
        brand: 'RSG Exports',
        description: 'Gold Premium Basmati Rice is known for its exceptional aroma and long, slender grains. This rice cooks to perfection, offering a fluffy texture ideal for biryanis, pulaos, and other exquisite dishes. Sourced and aged to deliver premium quality, it\'s the perfect choice for those who value authentic taste and texture.',
        keyFeatures: [
          'Aged premium basmati rice',
          'Long, slender grains',
          'Rich aroma & soft texture',
          'Available in 5, 10, 25, and 30 kg packs'
        ],
      
      
    image: require('../../assets/01.png'),
    imageAlt: 'Frontline Premium Basmati Rice Packet'
  },
  {
      id: 2,
      title: 'Diamond Premium Basmati Rice',
      brand: 'RSG Exports',
      description: 'Diamond Premium Basmati Rice offers exceptional aroma and long, slender grains. Perfectly aged to deliver premium quality, it cooks to perfection, offering a fluffy texture ideal for biryanis, pulaos, and other fine dishes. A must-have for those who seek authentic taste and texture.',
      keyFeatures: [
        'Aged premium basmati rice',
        'Long, slender grains',
        'Rich aroma & soft texture',
        '30 kg export pack',
        'Available in 5, 10, 25, and 30 kg packs'
      ],

    
    image: require('../../assets/02.png'),
    imageAlt: 'Frontline Premium Basmati Rice Packet'
  },
  {
    id: 3,
    title: 'Platinum Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Platinum Premium Basmati Rice is a mark of excellence. With its long, aromatic grains, it offers an unparalleled dining experience. Aged to perfection, this premium rice is known for its exceptional aroma, rich flavor, and fluffy texture, making it the perfect choice for luxurious biryanis, pulaos, and gourmet dishes.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, slender grains',
      'Exceptional aroma & rich flavor',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/03.png'),
    imageAlt: 'Platinum Premium Basmati Rice Packet'
  },
  {
    id: 4,
    title: 'Khushboo Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Khushboo Premium Basmati Rice lives up to its name with its fragrant, aromatic aroma that fills the kitchen with every cook. Known for its long, slender grains, this rice is aged to perfection, offering a soft and fluffy texture. Ideal for biryanis, pulaos, and any dish where the aroma of basmati rice takes center stage.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, slender grains',
      'Fragrant, aromatic aroma',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/04.png'),
    imageAlt: 'Khushboo Premium Basmati Rice Packet'
  },{
    id: 5,
    title: 'Silver Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Silver Premium Basmati Rice offers a perfect balance of delicate aroma and long, slender grains. Carefully aged to ensure a fluffy texture and rich flavor, it’s the ideal choice for creating aromatic dishes like biryanis, pulaos, and everyday meals. With Silver, enjoy the finest quality rice that cooks to perfection every time.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, slender grains',
      'Delicate aroma & rich flavor',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/05.png'),
    imageAlt: 'Silver Premium Basmati Rice Packet'
  },
  {
    id: 6,
    title: 'Mehak Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Mehak Premium Basmati Rice lives up to its name, offering a delightful fragrance that enhances every meal. With long, elegant grains and a soft, fluffy texture, it’s the perfect choice for creating aromatic biryanis, pulaos, and other special dishes. Aged to perfection, this rice delivers a taste of tradition with every bite.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, slender grains',
      'Delightful fragrance & aromatic flavor',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/06.png'),
    imageAlt: 'Mehak Premium Basmati Rice Packet'
  },
  {
    id: 7,
    title: 'Kesar Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Kesar Premium Basmati Rice is known for its distinct aroma and rich flavor that enhance every dish. With long, aromatic grains, this rice is perfect for biryanis, pulaos, and any recipe where the authentic taste and fragrance of basmati are desired. Aged to perfection, Kesar promises a fluffy, non-sticky texture that cooks beautifully every time.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, aromatic grains',
      'Distinct aroma & rich flavor',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/07.png'),
    imageAlt: 'Kesar Premium Basmati Rice Packet'
  },
  {
    id: 8,
    title: 'Sughandh Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Sughandh Premium Basmati Rice offers an enchanting fragrance that elevates every meal. With its long, slender grains and perfectly aged texture, it provides a fluffy and aromatic cooking experience. Ideal for biryanis, pulaos, and other rice dishes, Sughandh is the perfect choice for those who appreciate the authentic aroma and taste of basmati rice.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, slender grains',
      'Enchanting fragrance & soft texture',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/08.png'),
    imageAlt: 'Sughandh Premium Basmati Rice Packet'
  },
  {
    id: 9,
    title: 'Premium Basmati Rice',
    brand: 'RSG Exports',
    description: 'Premium Basmati Rice offers the perfect blend of long, slender grains and an aromatic fragrance that enhances the taste of every dish. Aged to perfection, it delivers a fluffy texture that’s ideal for biryanis, pulaos, and a variety of rice-based meals. A top choice for those who demand quality and consistency with every grain.',
    keyFeatures: [
      'Aged premium basmati rice',
      'Long, slender grains',
      'Aromatic fragrance & soft texture',
      '30 kg export pack',
      'Available in 5, 10, 25, and 30 kg packs'
    ],
    image: require('../../assets/09.png'),
    imageAlt: 'Premium Basmati Rice Packet'
  }
  

  
  
  

  
  // You can add more products following the same structure
];

const RiceProductCard = ({ product, reverseLayout }) => {
  return (
    <div className={`rsg-product-card ${reverseLayout ? 'rsg-reverse-layout' : ''}`} data-aos="fade-up">
      <div className="rsg-product-image-container">
        <img 
          src={product.image} 
          alt={product.imageAlt} 
          className="rsg-product-image"
        />
      </div>
      <div className="rsg-product-details">
        <h2 className="rsg-product-title">
          <span className="rsg-product-name">{product.title}</span>
        </h2>
        <p className="rsg-product-description">{product.description}</p>
        <div className="rsg-key-features">
          <h3 className="rsg-key-features-title">Key Features:</h3>
          <ul className="rsg-key-features-list">
            {product.keyFeatures.map((feature, index) => (
              <li key={index} className="rsg-key-feature-item">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const RiceProductGrid = () => {
  return (
    <div className="rsg-product-grid">
      <h2 className="itemhead">Our Basmati Rice Range</h2>
      {riceProducts.map((product, index) => (
        <RiceProductCard 
          key={product.id} 
          product={product} 
          reverseLayout={index % 2 !== 0} 
        />
      ))}
    </div>
  );
};

export default RiceProductGrid;