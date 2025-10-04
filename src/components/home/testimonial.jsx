import React, { useEffect } from 'react';
import './testimonial.css';

const TestimonialSlider = () => {
  useEffect(() => {
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
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 },
          1400: { items: 4 }
        }
      });
    }

    return () => {
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
      text: 'Exceptional service and premium rice quality. RSG Exports enhances our supply chain with consistency, reliability, and customer satisfaction in every shipment.',
      rating: 5
    },
    {
      id: 2,
      image: require('../../assets/testimonial2.png'),
      name: 'Rajiv Malhotra',
      text: 'Timely deliveries and outstanding rice quality. Their attention to detail and commitment to excellence make them our trusted and preferred supplier always.',
      rating: 4
    },
    {
      id: 3,
      image: require('../../assets/testimonial3.png'),
      name: 'Priya Nair',
      text: 'From packaging to product freshness, RSG Exports delivers excellence. Their dedication to maintaining high standards ensures complete customer satisfaction every time.',
      rating: 5
    },
    {
      id: 4,
      image: require('../../assets/testimonial4.png'),
      name: 'Abeba',
      text: 'A reliable partner focusing on top quality. Their rice varieties stand out in purity, taste, and international standards, making them a top choice.',
      rating: 4
    },
    {
      id: 5,
      image: require('../../assets/testimonial5.png'),
      name: 'Amit Khanna',
      text: 'Consistently high-quality rice with excellent support. We value their commitment to delivering outstanding products that meet global expectations efficiently every time.',
      rating: 5
    },
    {
      id: 6,
      image: require('../../assets/testimonial6.png'),
      name: 'Amaya',
      text: 'Impressive product range and smooth logistics. RSG Exports ensures we receive premium-grade rice, maintaining trust and excellence in every shipment they provide.',
      rating: 4
    }
  ];

  return (
    <div className="testimonial-section">
      <div className="testimonial-section-inner">
        <h2
          className="testimonial-title"
          // style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '25px', textAlign: 'Lect' }}
        >
          TESTIMONIAL
        </h2>

        <div className="owl-carousel testimonial-carousel">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="testimonial-item"
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                width: '280px',      // equal width
                height: '260px',     // equal height, reduced
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div className="testimonial-content">
<div
  style={{
    height: '150px',        // fixed height for text area
    overflow: 'hidden',     // hides overflow text
    marginBottom: '12px'    // spacing before footer
  }}
>
                   <p
                  className="testimonial-text"
                  style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '12px', color: '#333' }}
                >
                  {testimonial.text}
                </p>
                  </div>


                <h4
                  className="testimonial-name"
                  style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: '#111' }}
                >
                  {testimonial.name}
                </h4>

                <div
                  className="testimonial-rating"
                  style={{ marginTop: '6px', fontSize: '18px' }}
                >
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa ${i < testimonial.rating ? 'fa-star' : 'fa-star-o'}`}
                      style={{ color: '#f1c40f', marginRight: '4px' }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
