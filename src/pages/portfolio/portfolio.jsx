import React, { useEffect, useState } from "react";
import { Code, Layout, ArrowRight, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../utils/projects";
import InstantTopLink from "../../utils/instantTopLink";

// ProjectCard Component
const ProjectCard = ({ project, index }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const staggerDelay = index * 200;

  if (!project) return null;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${staggerDelay}ms` }}
      className={`cursor-pointer w-full sm:max-w-[90%] md:max-w-[100%] lg:max-w-[95%] mx-auto mb-8 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform 
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        duration-700 bg-white/5 backdrop-blur-xl border border-white/20`}
    >
      <div className="relative w-full h-[300px]">
        <img
          src={project?.image || 'fallback-image-url'}
          alt={project?.title || 'Project Title'}
          className="w-full h-full object-cover"
        />
        <div
          style={{ transitionDelay: `${staggerDelay + 200}ms` }}
          className={`absolute top-4 right-4 bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-all duration-500
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          {project?.category || 'No Category'}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <h3 
          style={{ transitionDelay: `${staggerDelay + 100}ms` }}
          className={`text-lg sm:text-xl font-bold mb-4 text-white transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {project?.title || 'No Title'}
        </h3>
        <p 
          style={{ transitionDelay: `${staggerDelay + 150}ms` }}
          className={`text-gray-300 mb-4 text-sm flex-grow transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {project?.description || 'No description available.'}
        </p>
        <button 
          style={{ transitionDelay: `${staggerDelay + 250}ms` }}
          className={`mt-4 flex items-center gap-2 text-[#00bcd4] font-semibold transition-all duration-500
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          View Project Details <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const CompanyPortfolio = () => {
  return (
    <div className="min-h-screen bg-transparent backdrop-blur-2xl border border-white/10">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white py-32 lg:py-32 backdrop-blur-lg bg-white/5 border-b border-white/20"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Crafting Digital Experiences That Inspire
          </motion.h1>
        </div>
      </motion.header>

      {/* Portfolio Section */}
      <section className="pt-20 pb-12">
        <div className="mx-auto px-4 md:px-6 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Web Development Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <InstantTopLink to={`/projectDetail/${project?.slug}`} key={index}>
                <ProjectCard project={project} index={index} />
              </InstantTopLink>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 text-white backdrop-blur-lg bg-white/5 border border-white/20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Our Development Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: "Custom Web Development" },
              { icon: <Layout />, title: "UI/UX Design" },
              { icon: <Boxes />, title: "Component Libraries" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg"
              >
                {service.icon}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyPortfolio;
