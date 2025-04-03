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
        {/* Increased space between items */}
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

        {/* Generate Site Button */}
        <a href="https://wa.me/+918720885782" target="_blank" rel="noopener noreferrer">
          <button className="button">
            <div className="dots_border"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="sparkle"
            >
              <path
                className="path"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="black"
                fill="black"
                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
              ></path>
            </svg>
            <span className="text_button">Chat Now</span>
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

        {/* Generate Site Button (Mobile) */}
        <a href="https://wa.me/+918720885782" target="_blank" rel="noopener noreferrer">
          <button className="button">
            <div className="dots_border"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="sparkle"
            >
              <path
                className="path"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="black"
                fill="black"
                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
              ></path>
            </svg>
            <span className="text_button">Chat Now</span>
          </button>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
