import React, { useEffect, useState } from "react";
import {
  Code,
  Layout,
  Layers,
  Palette,
  ArrowRight,
  Monitor,
  Zap,
  Puzzle,
  Sparkles,
  Rocket,
  Box,
  Braces,
  Type,
  Trello,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../utils/projects";
import { useParams } from "react-router-dom";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { projectSlug } = useParams();
  const project = projects.find((proj) => proj.slug === projectSlug);

  console.log("project:", project); // Log to verify the correct project

  if (!project) {
    return <p>Project not found</p>; // Handle case where project doesn't exist
  }

  console.log(projectSlug, "projectSlug")
  console.log(project, "project")

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">
          Loading project details...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        {/* Header Section */}
        <motion.header
          className="text-center mb-8 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
          }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {project?.title}
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            {project?.description}
          </p>
        </motion.header>

        {/* Image Gallery */}
        <motion.section
          className="my-8 sm:my-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
            Project Visualization
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project?.images.map((image, index) => (
              <motion.div
                key={index}
                className="bg-white p-2 rounded-lg shadow-md"
                whileHover="hover"
                variants={animationVariants}
              >
                <img
                  src={image}
                  alt={`Project view ${index + 1}`}
                  className="w-full h-48 sm:h-64 object-cover rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Navigation Tabs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-12 space-y-2 sm:space-y-0 sm:space-x-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          {[
            { id: "overview", icon: Monitor, label: "Overview" },
            { id: "technologies", icon: Layers, label: "Technologies" },
            { id: "architecture", icon: Trello, label: "Architecture" },
            { id: "performance", icon: Rocket, label: "Performance" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center justify-center px-3 py-2 rounded-md transition-all 
                text-sm sm:text-base w-full sm:w-auto
                ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
              whileHover="hover"
              variants={animationVariants}
            >
              <tab.icon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" size={20} />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          {activeTab === "overview" && (
            <motion.section
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              {/* Existing content with adjusted responsive classes */}
              <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <Sparkles className="mr-3 text-blue-500" />
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {project?.fullDescription}
                </p>
              </div>
              <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
                  <Box className="mr-3 text-green-500" />
                  Project Fundamentals
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: "Project Type", value: project?.projectType },
                    {
                      label: "Development Approach",
                      value: project?.developmentMethodology,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b pb-2 text-sm sm:text-base"
                    >
                      <span className="font-medium">{item.label}:</span>
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

{activeTab === "technologies" && (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }}
    className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 w-full max-w-full px-4 sm:px-2"
  >
    {/* Frontend Technologies Section */}
    <div className="bg-white p-[0.8rem] sm:p-4 rounded-lg shadow-md w-full">
      <h2 className="text-base sm:text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Braces className="mr-3 text-purple-500" />
        Frontend Technologies
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-3">
        {project?.frontendTechnologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 sm:p-2 rounded-md text-center hover:bg-blue-50 transition"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>

    {/* Code Snippets Section */}
    <div className="bg-white p-[0.8rem] sm:p-4 rounded-lg shadow-md w-full">
      <h2 className="text-2xl sm:text-xl font-semibold text-gray-800 mb-6 flex items-center">
        <Type className="mr-3 text-indigo-500" />
        Code Snippets
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 sm:p-3 rounded-md overflow-x-auto">
        <pre className="text-xs sm:text-[10px] whitespace-pre-wrap break-words">
          {project?.codeSnippets.componentStructure}
        </pre>
      </div>
    </div>
  </motion.section>
)}

          {activeTab === "architecture" && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                  <Puzzle className="mr-3 text-green-500" />
                  Component Architecture
                </h2>
                <div>
                  <h3 className="font-semibold mb-4">
                    {project?.componentArchitecture.type}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {project?.componentArchitecture.description}
                  </p>
                  <ul className="space-y-2">
                    {project?.componentArchitecture.keyPrinciples.map(
                      (principle, index) => (
                        <li
                          key={index}
                          className="flex items-center bg-gray-100 p-3 rounded-md"
                        >
                          <ArrowRight className="mr-3 text-blue-500" />
                          {principle}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Zap className="mr-3 text-yellow-500" />
                  Styling Approach
                </h2>
                <div>
                  <h3 className="font-semibold mb-4">
                    {project?.stylingApproach.type}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {project?.stylingApproach.description}
                  </p>
                  <ul className="space-y-2">
                    {project?.stylingApproach.advantages.map(
                      (advantage, index) => (
                        <li
                          key={index}
                          className="flex items-center bg-gray-100 p-3 rounded-md"
                        >
                          <ArrowRight className="mr-3 text-green-500" />
                          {advantage}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === "performance" && (
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Rocket className="mr-3 text-blue-500" />
                  Performance Metrics
                </h2>
                <div className="space-y-4">
                  {Object.entries(project?.codeQualityMetrics).map(
                    ([metric, score], index) => (
                      <div key={index} className="bg-gray-100 p-4 rounded-md">
                        <div className="flex justify-between mb-2">
                          <span className="capitalize">
                            {metric.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="font-bold text-blue-600">
                            {score}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Zap className="mr-3 text-green-500" />
                  Learning Outcomes
                </h2>
                <ul className="space-y-4">
                  {project?.learningOutcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 p-4 rounded-md flex items-center"
                    >
                      <ArrowRight className="mr-3 text-purple-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}

          {/* Similar responsive adjustments for other tabs (technologies, architecture, performance) */}
          {/* ... (rest of the existing code with responsive classes added) ... */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
