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
            items: 1
          },
          1000: {
            items: 1
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
    text: 'Exceptional service and premium rice quality. RSG Exports enhances our supply chain with consistency, reliability, and customer satisfaction in every shipment.'
  },
  {
    id: 2,
    image: require('../../assets/testimonial2.png'),
    name: 'Rajiv Malhotra',
    position: 'Designer, Agro Foods',
    text: 'Timely deliveries and outstanding rice quality. Their attention to detail and commitment to excellence make them our trusted and preferred supplier always.'
  },
  {
    id: 3,
    image: require('../../assets/testimonial3.png'),
    name: 'Priya Nair',
    position: 'Developer, Harvest India',
    text: 'From packaging to product freshness, RSG Exports delivers excellence. Their dedication to maintaining high standards ensures complete customer satisfaction every time.'
  },
  {
    id: 4,
    image: require('../../assets/testimonial4.png'),
    name: 'Abeba',
    position: 'Manager, Organic Grains',
    text: 'A reliable partner focusing on top quality. Their rice varieties stand out in purity, taste, and international standards, making them a top choice.'
  },
  {
    id: 5,
    image: require('../../assets/testimonial5.png'),
    name: 'Amit Khanna',
    position: 'Marketing, Fresh Harvest',
    text: 'Consistently high-quality rice with excellent support. We value their commitment to delivering outstanding products that meet global expectations efficiently every time.'
  },
  {
    id: 6,
    image: require('../../assets/testimonial6.png'),
    name: 'Amaya',
    position: 'Marketing, Global Foods',
    text: 'Impressive product range and smooth logistics. RSG Exports ensures we receive premium-grade rice, maintaining trust and excellence in every shipment they provide.'
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