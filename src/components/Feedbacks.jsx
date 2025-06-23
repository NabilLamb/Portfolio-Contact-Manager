// src/components/Feedbacks.jsx
import { motion } from "framer-motion";
import { styles } from "../styles";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-[#915eff]/30"
  >
    {/* This div will now manage the spacing for the content below the image */}
    <div className="relative pt-12"> {/* ADDED pt-12 (or more) to push content down */}
      <div className="absolute -top-12 left-0 w-20 h-20 rounded-full overflow-hidden border-2 border-[#915eff]">
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* The content that was previously starting too high */}
      {/* Removed the mt-8 from this div, as pt-12 on the parent now handles the spacing */}
      <div>
        <p className="text-white tracking-wider text-[18px]">"{testimonial}"</p>

        <div className="mt-7">
          <div className="flex flex-col">
            <p className="text-white font-medium text-[16px]">
              {name}
            </p>
            <p className="mt-1 text-secondary text-[14px]">
              {designation}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Professional Endorsements</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");