import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Slanted Separator */}
      <div className="footer-slant"></div>

      <div className="footer-content">
        <h2 className="footer-logo">
          ALTUS <span>GLOBAL</span>
        </h2>

        <p className="footer-text">
          Strategic consulting solutions that drive measurable business impact.
        </p>

        <div className="footer-bottom">
          © 2025 Altus Global Consulting Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
