// src/components/Tech.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-12">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Arsenal</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <p className="text-gray-300 text-lg leading-8">
              I've mastered a versatile tech stack that enables me to build
              full-stack applications with measurable results. Here are the
              technologies I leverage to deliver:
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#915eff] mr-3"></div>
                <span className="text-white">30% faster processing</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#915eff] mr-3"></div>
                <span className="text-white">99.8% uptime solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#915eff] mr-3"></div>
                <span className="text-white">40% faster load times</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="relative">
              {hoveredTech && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
                  <div className="bg-[#0d1224] p-6 rounded-2xl border border-[#915eff]/30 shadow-xl max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {hoveredTech.name}
                    </h3>
                    <p className="text-gray-300">{hoveredTech.description}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20">
                      <BallCanvas icon={tech.icon} />
                    </div>
                    <p className="text-white text-sm mt-2">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
