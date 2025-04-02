import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import InstantTopLink from "../../utils/instantTopLink";

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
  }, [location.pathname]); // Closes menu on route change

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 transition-all duration-300 z-50 ${
        isProjectDetailPage || scrolled
          ? "bg-white text-black shadow-md" // White background with black text
          : "bg-transparent text-white" // Transparent with white text
      }`}
    >
      {/* Clickable Logo */}
      <Link 
          to="/" 
          className={`font-bold text-2xl tracking-normal leading-none 
                      transition duration-300 
                      ${scrolled ? "text-black" : "text-white"}`}
        >
          Yashi IT Services
        </Link>


      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {["Home", "Portfolio", "Services", "ContactUs"].map((item, index) => (
          <InstantTopLink
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={`font-medium transition duration-300 ${
              scrolled || isProjectDetailPage
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            {item}
          </InstantTopLink>
        ))}
      </div>

      {/* Mobile Menu Button (Burger/Close) */}
      <button
        className={`md:hidden text-3xl z-50 relative ${
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
        } transition-transform duration-300 flex flex-col items-center justify-center space-y-8 text-white md:hidden`}
      >
        {["Home", "Portfolio", "Services", "ContactUs"].map((item, index) => (
          <InstantTopLink
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-xl font-semibold text-white hover:text-gray-400 transition duration-300"
          >
            {item}
          </InstantTopLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
