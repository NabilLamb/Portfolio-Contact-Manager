import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import my from "../assets/my.png"; // Import your image

const ServiceCard = ({ service, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        animate={{ rotate: "360deg" }}
        transition={{ duration: 2 }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
      <motion.h3
        variants={textVariant(0.2 + index * 0.1)}
        className="text-xl font-bold text-center mt-4"
      />
      <motion.p
        variants={fadeIn("", "", 0.3 + index * 0.1, 1)}
        className="text-secondary text-sm text-center mt-2"
      >
        {service.description}
      </motion.p>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center sm:min-h-[400px] min-h-[300px]">
        {/* Text Section */}
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] sm:w-1/2 w-full mb-4 sm:mb-0 px-4 sm:px-0"
        >
          I'm a software engineer and front-end developer with a passion for
          crafting responsive, user-focused web experiences. My expertise lies
          in building modern, visually compelling applications that prioritize
          usability, performance, and scalability. Currently, I'm working on
          optimizing a web application to be even more efficient and adaptable.
          I love taking on new challenges, collaborating with talented teams,
          and bringing innovative ideas to life.
        </motion.p>

        {/* Image Section - Visible only on larger screens */}
        <motion.div
          variants={fadeIn("left", "", 0.1, 1)}
          className="sm:w-1/2 w-full hidden sm:block px-4 sm:px-0"
        >
          <img
            src={my}
            alt="my"
            className="object-cover w-full h-auto rounded-[20px]"
          />
        </motion.div>
      </div>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
