// src/components/Journey.jsx
import React from "react";
import "./../styles/journey.css";

const Journey = () => {
  const timeline = [
    {
      year: "2022",
      title: "Started B.Tech CSE",
      desc: "Enrolled in Parul University, got into coding, web dev & Python.",
    },
    {
      year: "2022",
      title: "First Web Projects",
      desc: "Built basic websites with HTML, CSS, JavaScript. Learnt React.",
    },
    {
      year: "2023",
      title: "Learn Flask Python Backend",
      desc: "Worked on projects using Flask + MongoDB. Started WallpaperHub.",
    },
    {
      year: "2024",
      title: "Real-World Projects + AI",
      desc: "Added React animations, Flask APIs, auto-fetching from APIs, & AI concepts.",
    },
    {
      year: "2025",
      title: "Portfolio + Placement Prep",
      desc: "Final year. Building polished portfolio, aiming remote dev roles & placements.",
    },
  ];

  return (
    <section className="journey" id="journey">
      <h2 className="journey__title">My Journey</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline__item" key={index} data-aos="zoom-in">
            <div className="timeline__year">{item.year}</div>
            <div className="timeline__content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
