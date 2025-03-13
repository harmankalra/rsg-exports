import React, { useEffect } from 'react';
import './testimonial.css';

const TestimonialSlider = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component mount
    if (window.jQuery && window.$) {
      window.$('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
           } ,
          1400: {
            items: 4
          }
        }
      });
    }

    return () => {
      // Clean up carousel on component unmount
      if (window.jQuery && window.$) {
        window.$('.testimonial-carousel').owlCarousel('destroy');
      }
    };
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      image: require('../../assets/testimonial1.png'),
      name: 'Sophia Fernandes',
      position: 'CEO, Global Trade Co.',
      text: 'Exceptional service and top-quality rice. RSG Exports has truly elevated our supply chain, ensuring consistency in every shipment.'
    },
    {
        id: 2,
        image: require('../../assets/testimonial2.png'),
        name: 'Rajiv Malhotra',
      position: 'Designer, Agro Foods',
      text: 'Timely deliveries and superb quality. Their attention to detail and commitment to excellence make them our preferred supplier.'
    },
    {
      id: 3,
      image: require('../../assets/testimonial3.png'),
      name: 'Priya Nair',
      position: 'Developer, Harvest India',
      text: 'From packaging to product freshness, RSG Exports never disappoints. Their dedication to customer satisfaction is unmatched.'
    },
    {
        id: 4,
        image: require('../../assets/testimonial4.png'),
        name: 'Abeba',
        position: 'Manager, Organic Grains',
        text: 'A reliable partner with a keen focus on quality. Their rice varieties stand out in the market for their purity and taste.'
    },
    {
        id: 5,
        name: 'Amit Khanna',
      image: require('../../assets/testimonial5.png'),
      position: 'Marketing, Fresh Harvest',
      text: 'Consistently high-quality rice and excellent support. We appreciate their commitment to maintaining international standards.'
    },
    {
      id: 6,
      image: require('../../assets/testimonial6.png'),
      name: 'Amaya',
      position: 'Marketing, Global Foods',
      text: 'Impressive product range and smooth logistics. RSG Exports ensures that we receive top-grade rice on every order.'
    }
  ];
  

  return (
    <div className="testimonial-section">
      <div className="testimonial-section-inner">
        <h2 className="testimonial-title">TESTIMONIAL</h2>
        
        <div className="owl-carousel testimonial-carousel">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-item" style={{ backgroundImage: `url(${testimonial.image})` }}>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                {/* <p className="testimonial-position">{testimonial.position}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;