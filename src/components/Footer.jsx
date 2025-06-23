// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { github, linkedin, logo } from '../assets';
import { navLinks, services, technologies } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Group technologies by category
  const techCategories = {
    Languages: technologies.filter(tech => 
      ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'SQL'].includes(tech.name)
    ),
    Frontend: technologies.filter(tech => 
      ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Redux'].includes(tech.name)
    ),
    Backend: technologies.filter(tech => 
      ['Node.js', 'Express', 'MongoDB', 'MySQL'].includes(tech.name)
    ),
    Tools: technologies.filter(tech => 
      ['Git', 'Figma', 'Docker', 'Postman', 'Jira'].includes(tech.name)
    )
  };

  return (
    <motion.footer 
      className="w-full py-12 bg-[#0a0a0a] border-t border-[#915eff]/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#915eff] to-transparent opacity-30"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#915eff]/10 filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[#38bdf8]/10 filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="Nabil Lambattan Logo" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <h3 className="text-white text-xl font-bold">Nabil Lambattan</h3>
                <p className="text-gray-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Creating high-performance web applications with measurable results and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/NabilLamb" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-white p-2 rounded-lg hover:bg-slate-300 transition-all"
              >
                <img 
                  src={github} 
                  alt="GitHub" 
                  className="w-5 h-5 object-contain" 
                />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/nabil-lambattan227961186/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-white p-2 rounded-lg hover:bg-slate-300 transition-all"
              >
                <img 
                  src={linkedin} 
                  alt="LinkedIn" 
                  className="w-5 h-5 object-contain" 
                />
              </motion.a>
              <motion.a 
                href="mailto:lambattannabil@gmail.com" 
                whileHover={{ y: -5 }}
                className="bg-white p-2 rounded-lg hover:bg-slate-300 transition-all"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 text-black" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#915eff] rounded-full mr-2"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <motion.a 
                    href={`#${link.id}`} 
                    className="text-gray-400 hover:text-[#915eff] transition-colors flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2 text-[#915eff] opacity-0 group-hover:opacity-100 transition-opacity">↳</span>
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#4ade80] rounded-full mr-2"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <div className="text-gray-400 flex items-start">
                    <span className="mr-2 text-[#4ade80] mt-1">•</span>
                    <div>
                      <p className="font-medium text-gray-300">{service.title}</p>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#38bdf8] rounded-full mr-2"></span>
              Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(techCategories).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-gray-300 font-medium mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {items.map(tech => (
                      <li key={tech.name} className="text-gray-400 text-sm flex items-center">
                        <span className="mr-2 text-[#38bdf8]">•</span>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#0d1224] to-[#1a1a2e] rounded-xl border border-[#915eff]/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Ready to collaborate?</h3>
              <p className="text-gray-400 max-w-md">
                I'm available for freelance opportunities and full-time positions. Let's discuss how I can help with your project.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="mt-4 md:mt-0 bg-gradient-to-r from-[#915eff] to-[#38bdf8] text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-[#915eff]/30 hover:shadow-[#915eff]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nabil Lambattan. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-500 text-sm mr-2">
              Crafted with passion using
            </p>
            <div className="flex space-x-1">
              <span className="text-[#915eff] font-bold">React</span>
              <span className="text-gray-500">&</span>
              <span className="text-[#38bdf8] font-bold">Three.js</span>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <motion.a 
          href="#"
          className="absolute top-0 right-0 bg-[#1a1a1a] p-3 rounded-full border border-[#915eff]/30 hover:border-[#915eff]/60 transition-all"
          whileHover={{ y: -5 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 text-[#915eff]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;