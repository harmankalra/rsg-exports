import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const TimelineCarousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component mounts
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: false, // Disable navigation arrows
        dots: true, // Keep dots enabled as we'll customize them with CSS
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 } // Show 4 items on large screens
        },
        onInitialized: function () {
          AOS.refresh(); // Refresh AOS after Owl Carousel loads
      }
      });
    }
  }, []);
 
  const timelineData = [
    {
      year: "1999",
      description: "With humble beginnings, Our First Rice Production Unit was setup as RSG Foods Pvt. Ltd. and commenced operations under the guidance of our directors.",
      image: require('../../assets/pexel.png')
    },
    {
      year: "2008",
      description: "With support from our customers and our constant efforts, the RSG Group acquired another Production Unit to boost its production capacity to meet the growing demand.",
      image: require('../../assets/pexel.png')
    },
    {
      year: "2009",
      description: "To meet the rising  demand for Basmati Rice in the export markets, the RSG Group began bulk exports of rice to several countries in the Middle East.",
      image: require('../../assets/pexel.png')
    },
    {
      year: "2014",
      description: "Through support from our loyal clientele in the domestic and export markets, the RSG Group setup another export oriented Mega Rice Milling Unit as RSG Exports Pvt. Ltd. and was able to achieve a production milestone of 50 TPH. ",
      image: require('../../assets/pexel.png')
    }
    ,
    {
      year: "Present",
      description: "Today, RSG Exports Pvt. Ltd. is actively exporting rice to several destinations in the Middle East such as the Kingdom of Saudi Arabia, the UAE and is exploring several other markets abroad.",
      image: require('../../assets/pexel.png')
    }
  ];

  return (
    <div className="timeline-section">
      {/* Custom CSS */}
      <style>
        {`
          .timeline-section {
            padding: 40px 0;
            width: 80%;
            margin: 0 auto;
          }
          
          .timeline-item {
          width:95%;
            padding: 15px;
            transition: transform 0.3s ease;
          }
          
          .timeline-item:hover {
            transform: translateY(-5px);
          }
          
          .year {
        color: #587944;
font-family: "MPLUS1";
font-size: 2.50vw;
font-style: normal;
font-weight: 600;

          }
          
          .image-container {
            margin-bottom: 15px;
            margin-top: 15px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          
          .image-container img {
            width: 100%;
 
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          
          .image-container:hover img {
            transform: scale(1.05);
          }
          
          .description {
          color: #587944;
text-align: justify;
font-family: "CustomFont1";
font-size: 1.00vw;
font-style: normal;
font-weight: 500;
// line-height: 144.539%; /* 34.689px */
//             display: -webkit-box;
//             -webkit-line-clamp: 4;
//             -webkit-box-orient: vertical;
            overflow: hidden;
        height:160px;
          }
          .owl-nav{
            display: none;}
          /* Custom line indicators instead of dots */
          .owl-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
          }
          
          .owl-dots .owl-dot {
            margin: 0 5px;
          }
          
          .owl-dots .owl-dot span {
            display: block;
            width: 30px !important;
            height: 3px !important;
            border-radius: 0 !important;
            background: #ccc !important;
            transition: all 0.3s ease;
          }
          
          .owl-dots .owl-dot.active span {
            background: #5c8d46 !important;
            width: 50px !important;
          }
          
          @media (max-width: 1200px) {
            .timeline-item {
              padding: 10px;
            }
          }
          
          @media (max-width: 768px) {

.year{
font-size:4.00vw;}
.description{
font-size:3.50vw;}


            .owl-dots .owl-dot span {
              width: 20px !important;
            }
            
            .owl-dots .owl-dot.active span {
              width: 35px !important;
            }
            
            .description {
              -webkit-line-clamp: 5;
              height: 105px;
            }
          }
        `}
      </style>
      
      {/* Owl Carousel Container */}
      <div className="owl-carousel owl-theme">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="year" data-aos="zoom-out-up">
              {item.year}
            </div>
            <div className="description"data-aos="zoom-out-up">
              {item.description}
            </div>
            <div className="image-container" data-aos="zoom-out-up">
              <img 
                src={item.image} 
                alt={`RSG Foods in ${item.year}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCarousel;