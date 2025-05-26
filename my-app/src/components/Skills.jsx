// src/components/Skills.jsx
import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiFlask, SiJavascript, SiCplusplus } from "react-icons/si";
import "./../styles/skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaGithub />, name: "GitHub" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title" data-aos="fade-up">My Skills</h2>
      <div className="skills__grid">
        {skills.map((skill, idx) => (
          <div className="skills__card" key={idx}>
            <div className="skills__icon" data-aos="fade-up">{skill.icon}</div>
            <p className="skills__name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
