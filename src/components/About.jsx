// src/components/About.jsx
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import my from "../assets/my.png";

const ServiceCard = ({ service, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center">
          <div className="bg-[#151030] p-3 rounded-full mb-4">
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-white text-[20px] font-bold text-center mb-2">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm text-center">
            {service.description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Professional Profile</h2>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-gray-300 text-lg leading-[30px]"
          >
            I'm a Full-Stack Developer with expertise in building high-performance 
            web applications using modern technologies like <strong>React</strong>, 
            <strong> Next.js</strong>, and <strong>Node.js</strong>. My work focuses on:
          </motion.p>
          
          <ul className="mt-6 space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#915eff]">▹</div>
              <span className="text-gray-300">
                Delivering <strong>measurable results</strong> like 30% faster processing and 15% engagement boosts
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#915eff]">▹</div>
              <span className="text-gray-300">
                Creating <strong>scalable solutions</strong> that handle 500+ monthly users with 99.8% uptime
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#915eff]">▹</div>
              <span className="text-gray-300">
                Optimizing <strong>user experience</strong> with 40% faster load times and 25% lower bounce rates
              </span>
            </li>
          </ul>
          
          <div className="mt-8">
            <a 
              href="#experience" 
              className="inline-flex items-center text-[#915eff] hover:text-[#a67cff] transition-colors"
            >
              View my professional journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <motion.div 
          variants={fadeIn("left", "", 0.1, 1)}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#915eff] rounded-xl blur-2xl opacity-20 animate-pulse"></div>
          <img
            src={my}
            alt="Nabil Lambattan"
            className="relative w-full h-auto rounded-xl shadow-xl z-10"
          />
        </motion.div>
      </div>

      <div className="mt-20">
        <h3 className="text-white text-2xl font-bold mb-8 text-center">
          Core Competencies
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");