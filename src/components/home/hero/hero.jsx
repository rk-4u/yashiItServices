import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
import InstantTopLink from "../../../utils/instantTopLink";

function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const floatingImage = {
    visible: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="hero">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* Text Content */}
        <motion.div 
          className="text-content text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <motion.h2 className="subtitle" variants={fadeInUp}>
            IT Software & Design
          </motion.h2>

          <motion.h1 className="title" variants={fadeInUp}>
            Creating a better <span className="highlight">IT solutions</span>
          </motion.h1>

          <InstantTopLink to="/contactUs">
            <motion.button
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={buttonVariants}
              className="cta-button"
            >
              Start Now
            </motion.button>
          </InstantTopLink>
        </motion.div>

        {/* Illustration */}
        <motion.div 
          className="image-container"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          whileHover="visible"
        >
          <motion.img
            src="/laptop.png"
            alt="IT Solutions Illustration"
            className="hero-image"
            variants={floatingImage}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
