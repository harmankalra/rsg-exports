import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./expert.css";

const Expert = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="expert">
      <div className="expert__container">
        <div className="expert_text" data-aos="fade-up">
          <h2 className="eperthead">
            RSG Exports: Pioneering Excellence in Rice Exports
          </h2>
          <p className="expert__description">
            Founded in 2013, RSG Exports is a trusted name in the manufacturing
            and export of premium Basmati and Non-Basmati rice. With a legacy
            rooted in quality and commitment, we deliver the finest rice from
            Punjab, India, to customers around the world.
          </p>
          <div className="bsa-view-more-container1">
            <button className="bsa-view-more-btn1">View More</button>
          </div>
        </div>

        <div className="expert__image" data-aos="zoom-in"></div>
      </div>
    </div>
  );
};

export default Expert;
