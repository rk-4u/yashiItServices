import React, { useRef } from "react";
import { Code, Database, Rocket } from "lucide-react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-16 flex items-center justify-center"
      style={{
        /* Glassmorphic Effect */
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(15px) saturate(180%)",
        WebkitBackdropFilter: "blur(15px) saturate(180%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden" 
          animate={isInView ? "visible" : "hidden"} 
          variants={textVariants} 
          className="w-full md:w-1/2 space-y-6 p-6 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.15)", /* More transparency */
            backdropFilter: "blur(20px) saturate(200%)",
            WebkitBackdropFilter: "blur(20px) saturate(200%)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 0px 10px rgba(190, 154, 252, 0.6)",
            animation: "neonGlow 2s infinite alternate",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
            Why Choose Our <span className="text-[#be9afc]">Tech Stack?</span>
          </h2>
          
          <p className="text-gray-200 text-lg leading-relaxed">
            Every project starts with cutting-edge technology selection. We carefully choose the best tools and frameworks that match your project needs, ensuring **scalability**, **performance**, and **maintainability**.
          </p>

          {/* Features List */}
          <motion.div 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            variants={featureVariants} 
            className="space-y-5"
          >
            {[
              { icon: <Code size={28} />, title: "Modern Development" },
              { icon: <Database size={28} />, title: "Scalable Architecture" },
              { icon: <Rocket size={28} />, title: "Optimized Performance" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition"
                variants={textVariants}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0px 0px 10px rgba(190, 154, 252, 0.8)",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="text-[#be9afc]">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"} 
            variants={imageVariants} 
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="/undraw_feeling-proud_tdos.svg"
              alt="Tech Stack Illustration"
              className="w-full max-w-md md:max-w-lg"
              style={{ filter: "drop-shadow(0px 4px 10px rgba(190, 154, 252, 0.4))" }}
            />
          </motion.div>
      </div>

      {/* Neon Glow Animation */}
      <style>
        {`
          @keyframes neonGlow {
            0% {
              box-shadow: 0px 0px 5px rgba(190, 154, 252, 0.6), 0px 0px 15px rgba(190, 154, 252, 0.4);
            }
            100% {
              box-shadow: 0px 0px 10px rgba(190, 154, 252, 0.9), 0px 0px 20px rgba(190, 154, 252, 0.6);
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;
