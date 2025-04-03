import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { servicesContent } from '../../utils/servicesContent';
import InstantTopLink from '../../utils/instantTopLink';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesPage = () => {
  const { serviceSlug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = servicesContent.find((service) => service.slug === serviceSlug);
    setProject(foundProject);
  }, [serviceSlug]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const useAnimatedSection = (threshold = 0.2) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  const heroSection = useAnimatedSection();
  const overviewSection = useAnimatedSection();
  const processSection = useAnimatedSection();
  const expertiseSection = useAnimatedSection();
  const ctaSection = useAnimatedSection();

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Hero Section */}
      <motion.section
        ref={heroSection.ref}
        animate={heroSection.controls}
        initial="hidden"
        variants={sectionVariants}
        className="relative h-[500px] bg-cover bg-center flex items-center text-white w-full"
        style={{
          backgroundImage: `url(${project?.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-6 md:px-12 lg:px-24 text-center w-full">
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project?.title}</h1>
            <p className="text-xl md:text-2xl">{project?.hero}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className=" mx-auto px-6 md:px-12 lg:px-24 py-16 w-full">
        
        {/* Overview Section */}
        <motion.section
          ref={overviewSection.ref}
          animate={overviewSection.controls}
          initial="hidden"
          variants={sectionVariants}
          className="mb-16 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">{project?.description}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 w-full">
              <h3 className="text-xl font-semibold mb-4">Core Features</h3>
              <ul className="space-y-3">
                {project?.sections[0]?.features.map((feature, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-6 w-full">
              <img
                src={project?.imageUrl}
                alt={`${project?.title} illustration`}
                className="w-full h-[350px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-gray-600 leading-relaxed mt-4">{project?.sections[0]?.content}</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          ref={processSection.ref}
          animate={processSection.controls}
          initial="hidden"
          variants={sectionVariants}
          className="mb-16 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project?.sections[1]?.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 text-center w-full"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          ref={expertiseSection.ref}
          animate={expertiseSection.controls}
          initial="hidden"
          variants={sectionVariants}
          className="mb-16 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project?.expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 w-full"
              >
                <h3 className="font-semibold text-lg mb-2">{item}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          ref={ctaSection.ref}
          animate={ctaSection.controls}
          initial="hidden"
          variants={sectionVariants}
          className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl py-12 px-6 sm:p-16 text-white text-center shadow-xl w-full"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our {project?.title} solutions.
          </p>
          <InstantTopLink to="/contactUs">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Contact Us Today
            </button>
          </InstantTopLink>
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;
