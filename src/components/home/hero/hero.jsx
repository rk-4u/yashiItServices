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
          className="text-content text-center lg:text-left text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <motion.h2 className="subtitle" variants={fadeInUp}>
            IT Software & Design
          </motion.h2>

          <motion.h1 className="title lg:text-5xl" variants={fadeInUp}>
            Creating a better <span className="highlight">IT solutions</span>
          </motion.h1>

          {/* Extra text only for PC (hidden on mobile) */}
          <div className="hidden lg:block">
            <motion.p className="description mt-4 text-white lg:text-lg" variants={fadeInUp}>
              We provide innovative IT solutions that drive business success.  
              Our team is dedicated to crafting scalable, high-quality digital products.  
            </motion.p>

            <motion.ul className="features-list mt-6 space-y-2 text-lg text-white lg:text-xl" variants={fadeInUp}>
              <li>✅ Web & Mobile App Development</li>
              <li>✅ AI & Automation Solutions</li>
              <li>✅ Cloud Computing Services</li>
              <li>✅ UI/UX & Branding</li>
            </motion.ul>
          </div>

          {/* CTA Button */}
          <InstantTopLink to="/contactUs">
            <motion.button
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={buttonVariants}
              className="cta-button mt-6"
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
            className="hero-image lg:max-h-[500px]" 
            variants={floatingImage}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
