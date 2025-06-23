
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-6 rounded-2xl border-l-4 border-[#915eff] shadow-lg"
  >
    <div className="flex items-start">
      <div className="mr-4">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-16 h-16 object-contain"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
        <div className="flex justify-between flex-wrap">
          <p className="text-secondary text-[18px] font-semibold">
            {experience.company_name}
          </p>
          <p className="text-gray-400 text-[16px]">{experience.date}</p>
        </div>
        
        <ul className="mt-5 space-y-3">
          {experience.points.map((point, index) => (
            <li 
              key={`exp-point-${index}`}
              className="text-white-100 text-[16px] pl-3 relative before:content-['▹'] before:absolute before:left-0 before:text-[#915eff]"
            >
              {point}
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tech?.map((technology, techIndex) => (
            <span 
              key={techIndex}
              className="text-xs px-3 py-1 bg-[#1d1836] rounded-full text-[#915eff] border border-[#915eff]/30"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Career Journey</p>
        <h2 className={styles.sectionHeadText}>Professional Experience.</h2>
      </motion.div>
      
      <div className="mt-20">
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`} 
              index={index} 
              experience={experience} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");