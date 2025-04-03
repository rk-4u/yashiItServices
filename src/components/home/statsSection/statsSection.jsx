import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import useCountUp from "../useCountUp/useCountUp";

const statsData = [
  { number: 15, suffix: "+", label: "YEARS OF EXPERTISE", icon: "⏳" },
  { number: 24, suffix: "*7", label: "SERVICE", icon: "⏰" },
  { number: 400, suffix: "", label: "FINISHED PROJECTS", icon: "📂" },
  { number: 40, suffix: "+", label: "SKILLED EXPERTS", icon: "⭐" },
];

const StatItem = ({ number, suffix, label }) => {
  const itemRef = React.useRef(null);
  const controls = useAnimation();
  const isInView = useInView(itemRef, { once: true });
  const count = useCountUp(isInView ? number : 0, 2000);

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={itemRef}
      className="text-center mt-4 mb-4 md:mb-0 p-6 rounded-lg shadow-lg backdrop-blur-sm"
      style={{
        background: "rgba(255, 255, 255, 0.15)", // Subtle transparency
        backdropFilter: "blur(5px) saturate(180%)",
        WebkitBackdropFilter: "blur(5px) saturate(180%)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        padding: "20px",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.9 },
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center items-center mb-1">
        <span className="text-4xl font-bold text-white drop-shadow-lg">
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-sm font-semibold text-gray-200">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const sectionRef = React.useRef(null);
  const sectionControls = useAnimation();
  const isSectionInView = useInView(sectionRef, { once: true });

  React.useEffect(() => {
    if (isSectionInView) {
      sectionControls.start("visible");
    }
  }, [isSectionInView, sectionControls]);

  return (
    <motion.div
      ref={sectionRef}
      className="w-full py-12 px-6 md:px-12 rounded-lg"
      style={{
        background: "rgba(0, 0, 0, 0.5)", // Darker subtle background
        backdropFilter: "blur(8px) saturate(120%)", // Soft blur on the full section
        WebkitBackdropFilter: "blur(8px) saturate(120%)",
      }}
      initial="hidden"
      animate={sectionControls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
        {statsData.map((item, index) => (
          <React.Fragment key={index}>
            <StatItem number={item.number} suffix={item.suffix} label={item.label} />
            {index < statsData.length - 1 && (
              <div className="hidden md:block md:border-l border-gray-400 md:h-20 md:mx-3 w-[90%] md:w-auto border-t md:border-t-0 mt-2 md:mt-0"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
