import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../img/sritlogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.nav-items') && !e.target.closest('.nav-toggle')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <nav className="Navbar">
      <div className="nav-brand">
        <img className="nav-logo" src={Logo} alt="Logo" />
        <span className="nav-head">Vidyarthi Classes</span>
      </div>
      
      <ul className={`nav-items ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="courses" className="nav-link" onClick={() => setIsOpen(false)}>Courses</Link></li>
        <li><Link to="contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link></li>
      </ul>
      
      <button 
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
