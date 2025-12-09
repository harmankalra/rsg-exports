import React, { useEffect, useRef, useState, useCallback } from "react";
import "./keystat.css";

/* ------------------------------
   SINGLE VALUE COUNTER
--------------------------------*/
const useCounter = (end, duration = 1800, delay = 150) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const formatNumber = useCallback(() => {
    if (typeof end === "string" && end.includes("K")) {
      return (count / 1000).toFixed(0) + "K";
    }
    return count.toLocaleString();
  }, [count, end]);

  useEffect(() => {
    const el = document.getElementById(`counter-${end}`);
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;

        setTimeout(() => {
          let start = 0;
          let endValue =
            typeof end === "string" && end.includes("K")
              ? parseInt(end) * 1000
              : parseInt(end);

          const fps = 60;
          const totalFrames = Math.round((duration / 1000) * fps);
          let frame = 0;
          const easeOut = (t) => t * (2 - t);

          const counter = setInterval(() => {
            frame++;
            const progress = easeOut(frame / totalFrames);
            const value = Math.floor(start + progress * (endValue - start));

            setCount(value);
            if (frame >= totalFrames) clearInterval(counter);
          }, 1000 / fps);
        }, delay);
      }
    });

    observer.observe(el);
  }, [end, duration, delay]);

  return formatNumber();
};

/* ------------------------------
   RANGE COUNTER (Like 50–200)
--------------------------------*/
const useRangeCounter = (start, end, duration = 1800, delay = 150, id) => {
  const [val, setVal] = useState(start);
  const started = useRef(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;

        setTimeout(() => {
          const fps = 60;
          const totalFrames = Math.round((duration / 1000) * fps);
          let frame = 0;
          const easeOut = (t) => t * (2 - t);

          const interval = setInterval(() => {
            frame++;
            const progress = easeOut(frame / totalFrames);
            const value = Math.floor(start + progress * (end - start));

            setVal(value);

            if (frame >= totalFrames) clearInterval(interval);
          }, 1000 / fps);
        }, delay);
      }
    });

    observer.observe(el);
  }, [start, end, duration, delay, id]);

  return val;
};

/* ------------------------------
   STAT CARD COMPONENT
--------------------------------*/
const StatCard = ({ stat, index }) => {
  const isRange = stat.value.includes("-");

  let leftTarget = 0;
  let rightTarget = 0;

  if (isRange) {
    const parts = stat.value.split("-").map((v) => parseInt(v.trim(), 10));
    leftTarget = parts[0];
    rightTarget = parts[1];
  }

  // Hooks always run
  const leftCount = useRangeCounter(
    0,
    leftTarget,
    1800,
    index * 150,
    `range-left-${index}`
  );

  const rightCount = useRangeCounter(
    0,
    rightTarget,
    1800,
    index * 150 + 200,
    `range-right-${index}`
  );

  const singleCount = useCounter(stat.value, 1800, index * 150);

  const displayValue = isRange
    ? `${leftCount}–${rightCount}`
    : singleCount;

  return (
    <div className={`stat-card stat-card-${index + 1}`}>
      <div className="card-background"></div>

      <div className="card-content">
        <div className="icon-container">
          <img src={stat.iconSrc} alt={stat.title} className="stat-icon-img" />
          <div className="icon-glow"></div>
        </div>

        {/* Invisible elements that trigger each counter */}
        {isRange && (
          <>
            <div id={`range-left-${index}`} style={{ opacity: 0, height: 0 }}></div>
            <div id={`range-right-${index}`} style={{ opacity: 0, height: 0 }}></div>
          </>
        )}

        {!isRange && (
          <div id={`counter-${stat.value}`} style={{ opacity: 0, height: 0 }}></div>
        )}

        <div className="stat-info">
          <div className="stat-number">{displayValue}</div>
          <div className="stat-unit">{stat.unit}</div>
          <div className="stat-title">{stat.title}</div>
        </div>
      </div>

      <div className="card-shine"></div>
    </div>
  );
};


/* ------------------------------
   MAIN COMPONENT
--------------------------------*/
const KeyStatistics = () => {
  const statistics = [
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693675/2_zdo7tl.png",
      title: "Factory Locations",
      value: "2",
      unit: "Factories",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708074/4_e9dyj8.png",
      title: "Production Lines",
      value: "4",
      unit: "Milling Plants",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708056/3_jrlm4e.png",
      title: "Team Members",
      value: "50-200",
      unit: "Employees",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708087/6_p8cn0y.png",
      title: "Paddy Processing",
      value: "400",
      unit: "Tonnes/Day",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708124/1_ybtmqy.png",
      title: "Rice Milling",
      value: "440",
      unit: "Tonnes/Day",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708045/5_yjvmnv.png",
      title: "Quality Dryers",
      value: "22",
      unit: "High Quality",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708115/8_ywxsph.png",
      title: "Annual Capacity",
      value: "60000",
      unit: "Metric Tonnes",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751708098/7_lerqqn.png",
      title: "Storage Capacity",
      value: "60000",
      unit: "Metric Tonnes",
    },
    {
      iconSrc: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751709018/RSG_CATELOGUE_ajqgwa.png",
      title: "Export Experience",
value: (new Date().getFullYear() - 2009).toString(),

      unit: "Years",
    },
  ];

  return (
    <div className="key-statistics-container">
      <div className="container">
        <div className="header-section">
          <h2 className="main-title">
            <span className="title-text">Key Statistics</span>
          </h2>
          <p className="subtitle">
            Discover our impressive capabilities and achievements
          </p>
        </div>

        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyStatistics;
