import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link for routing
import "./Header.css";
import Button from "../animatedButton/Button"; // adjust path if needed
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">

        {/* About Us Page Link */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            ALTUS<span> GLOBAL</span>
          </Link>
        </div>


        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>

          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          {/* About Us Page Link */}
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link to="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>





          <Link to="/contact">
            <button className="cta-btn mobile-cta">Get Consultation</button>
          </Link>



        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          {/* <Button onClick={() => navigate("/contact")} /> */}
          <Link to="/contact">
            <Button />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
