import React from 'react';
import './keystat.css';

const KeyStatistics = () => {
  const statistics = [
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693675/2_zdo7tl.png',
      title: 'Factory Locations',
      value: '2',
      unit: 'Factories',
      color: 'from-blue-400 to-blue-600'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708074/4_e9dyj8.png',
      title: 'Production Lines',
      value: '4',
      unit: 'Milling Plants',
      color: 'from-purple-400 to-purple-600'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708056/3_jrlm4e.png',
      title: 'Team Members',
      value: '50-200',
      unit: 'Employees',
      color: 'from-green-400 to-green-600'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708087/6_p8cn0y.png',
      title: 'Paddy Processing',
      value: '400',
      unit: 'Tonnes/Day',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708124/1_ybtmqy.png',
      title: 'Rice Milling',
      value: '440',
      unit: 'Tonnes/Day',
      color: 'from-red-400 to-pink-500'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708045/5_yjvmnv.png',
      title: 'Quality Dryers',
      value: '22',
      unit: 'High Quality',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708115/8_ywxsph.png',
      title: 'Annual Capacity',
      value: '60K',
      unit: 'Metric Tonnes',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708098/7_lerqqn.png',
      title: 'Storage Capacity',
      value: '60K',
      unit: 'Metric Tonnes',
      color: 'from-orange-400 to-red-500'
    },
    {
      iconSrc: 'https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751709018/RSG_CATELOGUE_ajqgwa.png',
      title: 'Export Experience',
      value: '15',
      unit: 'Years',
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  return (
    <div className="key-statistics-container">
      {/* Background decorations */}
      <div className="bg-decoration"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className="header-section">
          <h2 className="main-title">
            <span className="title-text">Key Statistics</span>
            {/* <div className="title-underline"></div> */}
          </h2>
          <p className="subtitle">Discover our impressive capabilities and achievements</p>
        </div>

        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <div key={index} className={`stat-card stat-card-${index + 1}`}>
              <div className="card-background"></div>
              <div className="card-content">
                <div className="icon-container">
                  <img
                    src={stat.iconSrc}
                    alt={stat.title}
                    className="stat-icon-img"
                  />
                  <div className="icon-glow"></div>
                </div>
                <div className="stat-info">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-unit">{stat.unit}</div>
                  <div className="stat-title">{stat.title}</div>
                </div>
              </div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyStatistics;
