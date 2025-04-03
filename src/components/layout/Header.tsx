"use client";
import React, { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 shadow-lg transition-all duration-300"
      style={{ backgroundColor: "rgba(41, 39, 39, 0.85)" }}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-4 px-6 lg:px-24">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-white font-medium">
          {["Home", "Discover Infinetworx", "Services", "Contact", "About Us"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`} 
              className="hover:text-primary transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="px-6 py-2 hidden md:flex bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>

        {/* Mobile Menu Button (Custom Toggle) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Only visible when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 text-white py-5 flex flex-col items-center space-y-5 transition-all">
          {["Home", "Discover Infinetworx", "Services", "Contact", "About Us", "Get Started"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`} 
              className="hover:text-primary transition-all duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
