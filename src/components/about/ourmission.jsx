import React from "react";
import "./ourmission.css";
import sustain from "../../assets/sustainable.png";
import image2 from "../../assets/jigsaw.png"; // Replace with actual path
import image3 from "../../assets/process.png"; // Replace with actual path

function OurMission() {
    return (
        <div className="ourmission">
            <div className="ourmission__container">
                <div className="mission">
                    <h2 className="missionhead">Our Mission</h2>
                    <p>To deliver premium-quality rice with consistent standards</p>
                    <p>To innovate in processing and packaging</p>
                    <p>To expand our global network while staying committed to sustainability and ethics</p>
                </div>
                <div className="ourvision">
                    <h2 className="missionhead">Our Vision</h2>
                    <p>
                        To be recognized as a global leader in rice exports, offering products that reflect
                        purity, tradition, and quality, while building long-term partnerships with clients worldwide.
                    </p>
                </div>
            </div>

            <h2 className="Sustain">Sustainability & Responsibility</h2>
            <p className="commit">We are committed to:</p>

            <div className="resources">
                <div className="resource-item">
                    <img src={sustain} alt="Sustainable Practices" />
                    <p>Sustainable Practices</p>
                </div>
                <div className="resource-item">
                    <img src={image2} alt="Eco-Friendly Packaging" />
                    <p>Eco-Friendly Packaging</p>
                </div>
                <div className="resource-item">
                    <img src={image3} alt="Community Support" />
                    <p>Community Support</p>
                </div>
            </div>
        </div>
    );
}

export default OurMission;
