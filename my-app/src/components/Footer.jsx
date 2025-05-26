// src/components/Footer.jsx
import React from "react";
import "./../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" >
      <p>© {new Date().getFullYear()} Vatsal Bairagi. All rights reserved.</p>
      <p>
        Built with 💖
      </p>
    </footer>
  );
};

export default Footer;
