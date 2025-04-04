import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import InstantTopLink from "../../utils/instantTopLink";
import "./Navbar.css"; // Import your CSS file for styling

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Detect if user is on a project detail page
  const isProjectDetailPage = location.pathname.startsWith("/projectDetail/");

  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  // Setup event listeners
  useEffect(() => {
    if (!isProjectDetailPage) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isProjectDetailPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isProjectDetailPage]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-all duration-300 z-50 ${
        isProjectDetailPage || scrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className={`font-bold text-4xl tracking-wide leading-none transition duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        Yashi IT Services
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        {["Home", "Portfolio", "Services", "ContactUs"].map((item, index) => (
          <InstantTopLink
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={`text-lg font-semibold transition duration-300 ${
              scrolled || isProjectDetailPage
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            {item}
          </InstantTopLink>
        ))}

        {/* ✅ Single WhatsApp Button */}
        <a href="https://wa.me/+918720885782" target="_blank" rel="noopener noreferrer">
          <button className="button2">
            WhatsApp
            <img src="/whatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden text-4xl z-50 relative ${
          scrolled || isProjectDetailPage ? "text-black" : "text-white"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 flex flex-col items-center justify-center space-y-10 text-white md:hidden`}
      >
        {["Home", "Portfolio", "Services", "ContactUs"].map((item, index) => (
          <InstantTopLink
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-2xl font-bold text-white hover:text-gray-400 transition duration-300"
          >
            {item}
          </InstantTopLink>
        ))}

        {/* ✅ Single WhatsApp Button (Mobile) */}
        <a href="https://wa.me/+918720885782" target="_blank" rel="noopener noreferrer">
          <button className="button2">
            WhatsApp
            <img src="/whatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
