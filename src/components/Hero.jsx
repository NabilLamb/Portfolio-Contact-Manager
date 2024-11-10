import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Responsive size for circle */}
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#915eff]" />
          {/* Responsive size for line */}
          <div className="w-1 h-32 sm:h-40 md:h-60 lg:h-80 violet-gradient" />
        </div>
        <div className="ml-5">
          {/* Responsive text size */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white`}>
            Hi, I'm <span className="text-[#915eff]">Nabil</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 text-white-100">
            Ready to take on challenges, collaborate with teams, <br />
            and contribute to the development of modern, responsive, and
            user-centric web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      {/* Scroll Indicator with responsive size adjustments */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[45px] sm:w-[30px] sm:h-[50px] md:w-[35px] md:h-[55px] lg:w-[40px] lg:h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
              className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
