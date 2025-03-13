import React, { useState, useEffect, useCallback } from 'react';
import './ourteam.css';

const TeamShowcase = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Naresh Garg",
      title: "CEO & Managing Director",
      description: "A visionary at the helm, Naresh leads with dedication and foresight, shaping the company's strategic direction and fostering long-term partnerships. His leadership has been instrumental in establishing RSG Exports as a trusted name in the rice industry.",
      image: require('../../assets/team1.png')
    },
    {
      id: 2,
      name: "Kamal Garg",
      title: "Group Director & Quality Management",
      description: "Kamal ensures that the highest quality standards are maintained at every stage of production. His meticulous approach and expertise in quality control have played a crucial role in maintaining the superior standards of RSG Exports' rice products.",
      image: require('../../assets/team3.png')
    },
    {
      id: 3,
      name: "Pankaj Garg",
      title: "Purchase & International Sales Head",
      description: "Pankaj oversees international sales and procurement, ensuring smooth global trade operations. His strong negotiation skills and deep understanding of market trends have helped RSG Exports expand its presence across multiple international markets.",
      image: require('../../assets/team4.png')
    },
    {
      id: 4,
      name: "Vipul Garg",
      title: "Production & Domestic Sales Head",
      description: "Vipul leads the domestic sales and production teams, ensuring efficient supply chain management and seamless distribution. His expertise in market dynamics and operational strategies has strengthened RSG Exports' foothold in the domestic sector.",
      image: require('../../assets/team5.png')
    },
    {
      id: 5,
      name: "Amit Garg",
      title: "Director & CFO",
      description: "Amit oversees the company's financial strategies and investments, ensuring financial stability and growth. His keen financial acumen and strategic decision-making have contributed significantly to RSG Exports' sustained success.",
      image: require('../../assets/team6.png')
    },
    {
      id: 6,
      name: "Rahul Garg",
      title: "Production & Quality Management",
      description: "Rahul ensures that production processes adhere to the highest quality standards. His expertise in quality assurance and production efficiency guarantees that RSG Exports consistently delivers premium rice products to its customers.",
      image: require('../../assets/team2.png')
    }
  ];
  

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Use useCallback to memoize the function
  const handleChangeTeamMember = useCallback((index) => {
    if (index === activeIndex || isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 500);
  }, [activeIndex, isAnimating]);

  // Auto-change functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % teamMembers.length;
      handleChangeTeamMember(nextIndex);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, teamMembers.length, handleChangeTeamMember]);

  const activeMember = teamMembers[activeIndex];

  return (
    <div className="team-showcase">
      <div className="team-container">
        <h2 className="team-title">MEET OUR TEAM</h2>
        
        <p className="team-intro">
          At RSG Exports Pvt. Ltd., our team is the heart and soul of everything we do. Each member brings a unique blend of expertise, creativity, and passion, driving 
          our company forward and ensuring we deliver nothing short of excellence. Together, we share a unified commitment to quality and innovation, which has earned 
          us the trust of clients both locally and globally. Get to know the leaders who guide our journey toward continued growth and success:
        </p>
        
        <div className="team-content-layout">
          <div className="profile-main">
            {/* Main Profile Section - Left Side */}
            <div className='profileflex'>
            <div className={`profile-image-main ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <img 
                src={activeMember.image} 
                alt={activeMember.name} 
              />
            </div>
            
            {/* Profile Text Content */}
            <div className={`profile-text-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <h3 className="member-name-main">{activeMember.name}</h3>
              <p className="member-title-main">{activeMember.title}</p>
              <p className="member-description-main">{activeMember.description}</p>
            </div>

            </div>
            
            {/* Navigation Dots */}
            <div className="nav-dots">
              {teamMembers.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleChangeTeamMember(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Team Thumbnails - Right Side */}
          <div className="profile-thumbnails">
            <div className="thumbnails-grid">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleChangeTeamMember(index)}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;