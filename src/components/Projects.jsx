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
      desc: "This is a modern, full-stack Event Management web application designed to simplify the creation, organization, and tracking of events. Built using React for a dynamic, responsive frontend and Flask (Python) for a robust backend, this platform offers an efficient and user-friendly experience for both event organizers and attendees.",
    image: "/images/EventManagement.png",
    live: "https://paruluniversityevents.netlify.app/", // can be placeholder for now
    code: "https://github.com/VatsalBairagi20/Event-Management-Frontend",
  },
   {
    name: "School website",
    desc: "The official website for New Heights Public School, located in Khawasa, Madhya Pradesh, India. It provides information about the school's facilities, admission process, and contact details. The site highlights features such as a modern library, sports facilities, safe bus transportation, an ATL robotics lab, and a well-equipped biology lab. Parents and students can find essential information to learn more about the school's offerings and get in touch for admissions or inquiries.",
    image: "/images/School.png", // Put sample img in public/images
    live: "https://nhps.netlify.app",
    code: "https://github.com/VatsalBairagi20/NewHeightsPublicSchool",
  },
   {
    name: "Personal-Portfolio website",
    desc: " This is the personal portfolio website of Vatsal Bairagi, showcasing his skills and projects in web development. The site likely includes information about his expertise, work samples, and ways to contact him for professional opportunities.",
    image: "/images/Portfolio.png", 
    live: "vatsalbairagi20.netlify.app",
    code: "https://github.com/VatsalBairagi20/Portfolio",
  },
  
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
