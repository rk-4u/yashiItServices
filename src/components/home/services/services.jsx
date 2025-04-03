import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { servicesContent } from "../../../utils/servicesContent";
import { Link } from "react-router-dom";
import "./services.css"; // Import your CSS file for styles

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const leftSectionRef = useRef(null);
  const isLeftInView = useInView(leftSectionRef, { once: true });

  const isBelowMd = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCardStyle = (index) => {
    const basePosition = isBelowMd ? 130 : 176; 
    const scrollThreshold = index * 500;

    if (scrollY < scrollThreshold) {
      return {
        transform: "translateY(100%)",
        opacity: 0,
        visibility: "hidden",
      };
    }

    return {
      transform: "translateY(0)",
      opacity: 1,
      visibility: "visible",
      position: "sticky",
      top: `${basePosition}px`, 
    };
  };

  return (
    <div className="min-h-screen services-container py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 lg:gap-12">
          {/* Left Section */}
        <motion.div
        ref={leftSectionRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isLeftInView ? 1 : 0, y: isLeftInView ? 0 : -50 }}
        transition={{ duration: 0.8 }}
        className="w-[87%] md:w-[140%] lg:w-[100%] pb-16"
      >
        <div className="md:sticky top-[100px] md:top-[120px] lg:top-[140px] glass-info-box">
          <h2 className="text-5xl font-bold mb-8">
            Our Range Of Services
          </h2>
          <p className="text-lg mb-6">
            We provide cutting-edge solutions tailored to your business needs.
          </p>
          <p className="text-lg mr-6">
            Our team of professionals delivers <strong>custom web solutions</strong>.
          </p>
        </div>
      </motion.div>


          {/* Right Section with Glassy Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLeftInView ? 1 : 0, y: isLeftInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative space-y-10"
          >
            {servicesContent.map((card, index) => (
              <Link to={`/services/${card.slug}`} key={index}>
                <div className="transition-all duration-500" style={getCardStyle(index)}>
                  <div
                    className={`bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg 
                    rounded-lg px-6 py-8 transition-all duration-300 hover:shadow-2xl ${
                      index === servicesContent.length - 1 ? "" : "mb-[14rem]"
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">{card?.title}</h3>
                        <p className="text-gray-700 mb-14">{card?.description2}</p>
                        <button className="inline-flex items-center px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                          Learn More
                        </button>
                      </div>
                      <div className="order-1 md:order-2">
                        <img alt="icon" src={card?.icon} className="w-[30rem] md:w-full lg:w-full mx-auto"/>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
