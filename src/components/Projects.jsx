// src/components/Projects.jsx
import React from "react";
import "./../styles/projects.css";

const projects = [
  {
    name: "WallpaperHub",
    desc: "A category-based wallpaper app with React frontend & Flask backend, auto-fetches images via Pixabay API.",
    image: "/images/WallpaperHub.jpg", // Put sample img in public/images
    live: "https://wallpapershub.netlify.app",
    code: "https://github.com/VatsalBairagi20/wallpaperhub",
  },
  {
    name: "AI Buddy",
    desc: "A safe space AI chatbot for sharing thoughts and getting motivation. Built with Flask, OpenAI API and React.",
    image: "/images/aibuddy.png",
    live: "#", // can be placeholder for now
    code: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title" data-aos="fade-up">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, idx) => (
          <div className="project__card" data-aos="zoom-in-up" key={idx}>
            <img src={project.image} alt={project.name} className="project__img" />
            <h3 className="project__name">{project.name}</h3>
            <p className="project__desc">{project.desc}</p>
            <div className="project__btns">
              <a href={project.live} className="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.code} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
