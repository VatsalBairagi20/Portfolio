// src/components/Navbar.jsx
import React, { useState } from "react";
import "./../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const navLinks = ["Home", "About", "Journey", "Skills", "Projects", "Contact"];

  return (
    <header className="navbar">
      <div className="navbar__logo">Vatsal</div>

      <nav className={`navbar__links ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={closeNav}>
            {link}
          </a>
        ))}
      </nav>

      <div className="navbar__toggle" onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;
