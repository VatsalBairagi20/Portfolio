// src/components/Projects.jsx
import React from "react";
import "./../styles/projects.css";

const projects = [
  {
    name: "WallpaperHub",
    desc: "A category-based wallpaper app with React frontend & Flask backend, .",
    image: "/images/WallpaperHub.png", // Put sample img in public/images
    live: "https://wallpapershub.netlify.app",
    code: "https://github.com/VatsalBairagi20/wallpaperhub",
  },
  {
    name: "Event Management system for Academics",
      desc: "This is a modern, full-stack Event Management web application designed to simplify the process.",
    image: "/images/EventManagement.png",
    live: "https://paruluniversityevents.netlify.app/", // can be placeholder for now
    code: "https://github.com/VatsalBairagi20/Event-Management-Frontend",
  },
   {
    name: "School website",
    desc: "The official website for New Heights Public School.provides information about the school.",
    image: "/images/School.png", // Put sample img in public/images
    live: "https://nhps.netlify.app",
    code: "https://github.com/VatsalBairagi20/NewHeightsPublicSchool",
  },
   {
    name: "Personal-Portfolio website",
    desc: " This is the personal portfolio website of Vatsal Bairagi, showcasing his skills and projects in web dev.",
    image: "/images/Portfolio.png", 
    live: "vatsalbairagi20.netlify.app",
    code: "https://github.com/VatsalBairagi20/Portfolio",
  },
  {
  name: "Vatsal's Dev Blog",
  desc: "A personal blog sharing web dev tips, React + Flask projects, and real-world insights from Vatsal Bairagi.",
  image: "/images/blog.jpg",
  live: "https://vatsal-blog.vercel.app",
  code: "https://github.com/VatsalBairagi20/vatsal-blog",
},
  {
  name: "SmartSaver – Your Personal Savings Companion",
  desc: "A sleek savings-tracking app built by Vatsal Bairagi & Aryan Dewangan, letting you set custom financial goals, monitor progress, and manage transactions with future features like smart alerts, motivational nudges, and AI-powered suggestions.",
  image: "/images/smartsaver.png", 
  live: "https://smartsaverv1.netlify.app/",
  code: "https://github.com/VatsalBairagi20/SmartSaver---product-page", 
}


  
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

