// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915eff] rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#38bdf8] rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row max-w-7xl mx-auto px-6">
        {/* Text Content - Left Side */}
        <div className="flex-1 flex flex-col justify-center pt-28 lg:pt-0">
          <div className="flex items-start">
            <div className="hidden md:flex flex-col items-center mr-6">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 h-40 sm:h-60 violet-gradient" />
            </div>
            
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915eff]">Nabil</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Full-Stack Developer specializing in <br className="sm:block hidden" />
                <span className="code-gradient">React</span>, <span className="code-gradient">Next.js</span> & 
                <span className="code-gradient"> Node.js</span>
              </p>
              
              <div className="mt-5 max-w-2xl">
                <p className="text-lg text-gray-300">
                  Crafting high-performance web applications with 99.8% uptime and 
                  measurable business results. Passionate about optimization and 
                  creating exceptional user experiences.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.a 
                    href="#contact"
                    className="px-8 py-3 bg-tertiary rounded-xl text-white font-bold shadow-lg shadow-primary/50 hover:shadow-primary/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hire Me
                  </motion.a>
                  <motion.a 
                    href="#works"
                    className="px-8 py-3 border-2 border-[#915eff] rounded-xl text-white font-bold hover:bg-[#915eff]/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Model - Right Side */}
        <div className="flex-1 flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          {!isMobile && (
            <motion.div 
              className="w-full h-full max-w-xl max-h-[60vh]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ComputersCanvas />
            </motion.div>
          )}
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <a href="#about">
          <motion.div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 rounded-full bg-secondary" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;