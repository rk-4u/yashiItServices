import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import useCountUp from "../useCountUp/useCountUp";

const statsData = [
  { number: 15, suffix: '+', label: 'YEARS OF EXPERTISE', icon: '⏳' },
  { number: 24, suffix: '*7', label: 'SERVICE', icon: '⏰' },
  { number: 400, suffix: '', label: 'FINISHED PROJECTS', icon: '📂' },
  { number: 40, suffix: '+', label: 'SKILLED EXPERTS', icon: '⭐' },
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
      className="text-center mt-4 mb-4 md:mb-0"  // Reduced space
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center items-center mb-1">
        <span className="text-4xl font-bold text-red-600">
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-sm font-semibold">{label}</p>
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
      className="mb-8"  // Reduced space below section
      initial="hidden"
      animate={sectionControls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center md:px-6 lg:px-16">
        {statsData.map((item, index) => (
          <React.Fragment key={index}>
            <StatItem
              number={item.number}
              suffix={item.suffix}
              label={item.label}
            />
            {index < statsData.length - 1 && (
              <div className="block md:border-l border-gray-300 md:h-20 md:mx-3 w-[90%] md:w-auto border-t md:border-t-0 mt-2 md:mt-0"></div>  
              // Reduced height and margin of separator
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
