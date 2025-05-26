// src/components/HeroSection.jsx
import React from "react";
import "./../styles/hero.css";
import { Typewriter } from "react-simple-typewriter";
import heroAnim from "./../assets/hero.json";
import Lottie from "lottie-react";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1 data-aos="fade-up">
          Hey, I'm <span className="highlight">Vatsal</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          A passionate web developer...
        </p>

        <h2>
          <Typewriter
            words={["Web Developer", "Backend Enthusiast", "AI Explorer", "Excited Learner"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p>Crafting clean, bold, and modern web experiences.</p>

        <div className="hero__buttons">
          <a href="#projects" className="hero__btn">Projects</a>
          <a href="#contact" className="hero__btn btn-outline">Hire Me</a>
          <a href="/resume_Vatsal.pdf" download className="hero__btn btn-download">Download Resume</a>
        </div>
      </div>

      <div className="hero__anim">
        <Lottie animationData={heroAnim} loop={true} />
      </div>
    </section>
  );
};

export default HeroSection;
