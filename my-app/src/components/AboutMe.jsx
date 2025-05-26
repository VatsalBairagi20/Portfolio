// src/components/About.jsx
import React from "react";
import "./../styles/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
     
        <h2 className="about__title" data-aos="fade-right">About Me</h2>
        <p className="about__desc" data-aos="fade-up" data-aos-delay="200">
          I'm <span className="highlight">Vatsal</span>, a passionate full stack web developer who loves clean UI, modern animations, and smooth user experiences. I build responsive websites and web apps using <strong>React, Flask, and MongoDB</strong>, and I’m currently exploring the world of <strong>AI and backend optimization</strong>.
        </p>
        

        <div className="about__grid">
          <div className="about__item">
            <h4>🛠 Tech Stack</h4>
            <p>React, Node.js, Flask, MongoDB, Firebase, C++, Python</p>
          </div>

          <div className="about__item">
            <h4>🎓 Education</h4>
            <p>B.Tech in CSE @ Parul University, Vadodara</p>
          </div>

          <div className="about__item">
            <h4>🚀 Goals</h4>
            <p>Crack remote roles, build AI projects, and create impactful dev tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
