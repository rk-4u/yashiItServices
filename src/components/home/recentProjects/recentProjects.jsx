import React from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../../utils/projects";
import InstantTopLink from "../../../utils/instantTopLink";

const TiltCard = ({ children }) => {
  const [transform, setTransform] = React.useState("");
  const [transition, setTransition] = React.useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setTransition("transform 0.1s ease-out");
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    setTransition("transform 0.5s ease-out");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition }}
      className="rounded-xl overflow-hidden shadow-lg transition-transform"
    >
      {children}
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="md:w-[90%] lg:w-[85%] mx-auto mb-6 md:mb-10"
    >
      <TiltCard>
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(18px) saturate(180%)",
            WebkitBackdropFilter: "blur(18px) saturate(180%)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[250px] md:h-[280px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </TiltCard>

      <div
        className="py-4 px-5 rounded-b-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(22px) saturate(180%)",
          WebkitBackdropFilter: "blur(22px) saturate(180%)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.4)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
          {project.id}. {project.title}
        </h3>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <InstantTopLink to={`/projectDetail/${project.slug}`}>
          <button className="mt-4 px-5 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            View Detail
          </button>
        </InstantTopLink>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  return (
    <section
      className="text-white py-16 px-6"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-8"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(22px) saturate(180%)",
            WebkitBackdropFilter: "blur(22px) saturate(180%)",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.4)",
            padding: "2.5rem",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
            At Hexaly, we deliver <strong>innovative solutions</strong> that drive results.
            Here are some of our <strong>recent projects</strong>, showcasing our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <InstantTopLink to="/portfolio">
            <button className="px-7 py-3 bg-white text-black rounded-full text-lg shadow-md hover:bg-gray-300 transition-all duration-300">
              View More
            </button>
          </InstantTopLink>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
