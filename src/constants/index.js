import {
  profNone,
  profBelkasmi,
  profBougroun,
  profMellah,
  about1,
  about2,
  about3,
  about4,
  project1_Dashboard,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  php,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fcpo,
  cro,


  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "tech",
    title: "Technologies",
  }, 
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Application Development",
    icon: about1,
  },
  {
    title: "UI/UX Design and Prototyping",
    icon: about2,
  },
  {
    title: "Custom E-Commerce Solutions",
    icon: about3,
  },
  {
    title: "Front-End Optimization & Performance Tuning",
    icon: about4,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Full-stack Developer Intern",
    company_name: "FCPO",
    icon: fcpo,
    date: "March 2024 - September 2024",
    points: [
      "Developed a comprehensive eCommerce dashboard using React.js, focusing on user experience and responsive design.",
      "Integrated features for managing eCommerce data, including sales analytics, inventory management, and user interactions.",
      "Employed best practices in React to ensure efficient code structure and maintainable components.",
      "Utilized data visualization tools to display sales and inventory metrics through interactive graphs and tables.",
      "Collaborated with the development team to deploy the dashboard for a live eCommerce website, ensuring seamless user management and data flow.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "CRO",
    icon: cro,
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed a file management web app for associations and cooperatives using React.js, Node.js, and Bootstrap.",
      "Allowed users to upload and organize documents online, removing the need for manual submission and improving workflow efficiency.",
      "Incorporated filtering and authorization features to streamline the file access process and improve user experience.",
      "Collaborated closely with the back-end team to ensure integration between front-end and back-end systems, achieving smooth functionality for users.",
      "Assisted in supervising the implementation of additional front-end features, ensuring alignment with project requirements and deadlines."
    ],
  },
];

const testimonials = [
  // {
  //   testimonial: "Having been one of my students, I can confidently say that he was one of the most serious and disciplined students I have encountered over the years. His skills, enthusiasm, remarkable ability to learn, and diligent work ethic make him exceptionally well-suited to continue building a successful career in the field of computer science.",
  //   name: "Bougroun Nineb",
  //   designation: "Assistant Professor",
  //   company: "SupMti",
  //   image: profBougroun,
  // },
  {
    testimonial: "Mr. Nabil worked on an application for managing cooperatives and associations. Before diving into the design and development of the application, he took the initiative to identify the needs by meeting with relevant officials. This demonstrates his excellent analytical skills and problem-solving mindset.",
    name: "Boucraa Hanaa",
    designation: "Head of the Computer Science Department",
    company: "CRO",
    image: profNone,
  },
  {
    testimonial: "Ambitious, creative, and dynamic, he approaches all of his challenges with great enthusiasm. I can attest to his consistent dedication and commitment. The cultural and structural depth of his work is highly relevant, and his sense of responsibility makes him a strong and creative profile in his field.",
    name: "Youssef Mellah",
    designation: "State Engineer, Doctor, and Professor",
    company: "ENSA and SupMti",
    image: profMellah,
  },
  {
    testimonial: "I have had the privilege of working closely with Nabil, and I can confidently say that he possesses the necessary skills, experience, and dedication to excel in any professional opportunity. Throughout his academic journey, he consistently demonstrated a strong work ethic, a commitment to personal growth, and a passion for his field. Nabil’s ability to adapt, learn, and contribute meaningfully makes him well-equipped to succeed and make a lasting impact in his career. It is without hesitation that I recommend him for any future endeavors, knowing he will continue to achieve great things.",
    name: "Mohammed Ghaouth Belkasmi",
    designation: "Assistant Professor",
    company: "the National School of Applied Sciences of Oujda",
    image: profBelkasmi,
  },
];

const projects = [
  {
    name: "eCommerce Dashboard ",
    description:
      `
    This eCommerce dashboard, built with React, provides a powerful tool for managing orders, products, and customers. It integrates technologies like Material-UI for design, i18next for internationalization, and Axios for handling API requests, ensuring a smooth and dynamic user experience.
    ReactJS: Builds a dynamic, component-based UI.
      Material-UI: Offers a sleek, responsive design system.
      Axios: Manages HTTP requests for smooth backend communication.
      Redux: Handles state management for scalable apps.
      i18next: Supports multiple languages for internationalization.
      React-Router: Enables seamless navigation without page reloads.
      React-Spring: Enhances UI with smooth animations.
    This app helps clients manage their business operations more efficiently with a clean, scalable interface. It supports real-time updates, offers secure and smooth navigation, and provides a customizable platform to meet the needs of any growing eCommerce business.
    `,
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "i18next",
        color: "green-text-gradient",
      },
      {
        name: "React-Routers",
        color: "pink-text-gradient",
      },
      {
        name: "React-Spring",
        color: "blue-text-gradient",
      },
    ],
    image: project1_Dashboard,
    source_code_link: "https://github.com/NabilLamb/eCommerce-Dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };