// src/components/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./../styles/contact.css";

const contactItems = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 70245-30105",
    link: "tel:+917024530105",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "vatsalbairagi0404@gmail.com",
    link: "mailto:vatsalbairagi0404@gmail.com",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/VatsalBairagi",
    link: "https://github.com/VatsalBairagi20",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/VatsalBairagi",
    link: "https://linkedin.com/in/vatsal-bairagi-28327824b/",
  },
];

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title" data-aos="fade-up">Let's Connect</h2>
      <div className="contact__list">
        {contactItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="contact__card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__icon">{item.icon}</div>
            <div className="contact__info">
              <p className="contact__label">{item.label}</p>
              <p className="contact__value">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
