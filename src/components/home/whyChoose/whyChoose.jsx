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
    <section ref={sectionRef} className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden" 
          animate={isInView ? "visible" : "hidden"} 
          variants={textVariants} 
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Why Choose Our <span className="text-blue-600">Tech Stack?</span>
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed">
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
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
                variants={textVariants}
              >
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
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
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            alt="Tech Stack Illustration"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
