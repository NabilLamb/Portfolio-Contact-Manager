import {
  profNone,
  profBelkasmi,
  profBougroun,
  profMellah,
  about1,
  about2,
  about3,
  about4,
  javascript,
  typescript,
  nextjs,
  mysql,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  figma,
  fcpo,
  cro,
  freelancer,

  project1_butcherShop,
  project2_Dashboard,
  project3_Blog
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
    title: "Web Development",
    icon: about1,
    description: "React, Next.js, Node.js with 99.8% uptime solutions"
  },
  {
    title: "E-Commerce",
    icon: about2,
    description: "Full-featured platforms with real-time analytics"
  },
  {
    title: "UI/UX Optimization",
    icon: about3,
    description: "40% faster load times, 25% lower bounce rates"
  },
  {
    title: "Data Visualization",
    icon: about4,
    description: "Interactive dashboards driving 20% business improvements"
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    description: "Created dynamic UIs improving user engagement by 15%"
  },
  {
    name: "TypeScript",
    icon: typescript,
    description: "Implemented type-safe solutions reducing bugs by 30%"
  },
  {
    name: "React",
    icon: reactjs,
    description: "Built interactive dashboards driving 20% business improvements"
  },
  {
    name: "Next.js",
    icon: nextjs,
    description: "Developed full-featured e-commerce platforms with 99.8% uptime"
  },
  {
    name: "Node.js",
    icon: nodejs,
    description: "Created scalable backend solutions handling 500+ monthly users"
  },
  {
    name: "MySQL",
    icon: mysql,
    description: "Engineered SQL database solutions for relational data"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "Implemented NoSQL databases for flexible data management"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "Achieved 40% faster load times with utility-first CSS"
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    description: "Built responsive interfaces cutting mobile bounce rates by 25%"
  },
  {
    name: "Figma",
    icon: figma,
    description: "Designed intuitive UI/UX prototypes enhancing user flow and client satisfaction"
  }
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Independent Contractor",
    icon: freelancer,
    date: "December 2024 – Present",
    points: [
      "Developed and launched scalable e-commerce platforms using Next.js, MongoDB, and Clerk for small to medium-sized businesses",
      "Built custom order management systems, reducing manual workload by 30% and streamlining operations",
      "Integrated Cloudinary for media handling and implemented real-time push notifications to boost user engagement",
      "Maintained 99.8% uptime while supporting 500+ monthly active users and resolving technical issues efficiently",
      "Provided strategic recommendations, clear communication, and ongoing support to help clients improve conversions and billing decisions"
    ],
    tech: ["Next.js", "MongoDB", "Clerk", "Cloudinary", "Figma"]
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "FCPO, Oujda",
    icon: fcpo,
    date: "March 2024 - September 2024",
    points: [
      "Built interactive React.js dashboard for real-time sales and inventory tracking",
      "Drove 20% improvement in stock turnover through data visualization",
      "Streamlined UI with Tailwind CSS & Bootstrap, cutting page load times by 40%",
      "Secured API communications with JWT authentication maintaining 100% data integrity",
      "Worked in 5-member Agile team using Trello and GitHub"
    ],
    tech: ["React.js", "Tailwind CSS", "Bootstrap", "JWT"]
  },
  {
    title: "Web Developer Intern",
    company_name: "Oriental Regional Council (CRO), Oujda",
    icon: cro,
    date: "June 2022 - September 2022",
    points: [
      "Developed PHP-based file management system reducing document retrieval time by 40%",
      "Automated classification workflows cutting manual processing by 35%",
      "Implemented role-based access controls resulting in zero security incidents",
      "Integrated multi-criteria filters improving query success rates by 50%",
      "Conducted training sessions for 20+ end users"
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
  }
];

const testimonials = [
  {
    testimonial: "Mr. Nabil developed an application for managing cooperatives and associations. Before development, he identified needs by meeting with officials, demonstrating excellent analytical skills and problem-solving mindset.",
    name: "Boucraa Hanaa",
    designation: "Head of Computer Science Department",
    company: "Oriental Regional Council",
    image: profNone,
  },
  {
    testimonial: "Ambitious, creative, and dynamic, he approaches challenges with great enthusiasm. I attest to his consistent dedication. The depth of his work is highly relevant, and his sense of responsibility makes him a strong creative profile.",
    name: "Youssef Mellah",
    designation: "Professor & State Engineer",
    company: "ENSA and SupMTI",
    image: profMellah,
  },
  {
    testimonial: "I've worked closely with Nabil and can confidently say he possesses the skills, experience, and dedication to excel. Throughout his academic journey, he demonstrated strong work ethic and commitment to personal growth.",
    name: "Mohammed Belkasmi",
    designation: "Assistant Professor",
    company: "National School of Applied Sciences",
    image: profBelkasmi,
  }
];

const projects = [
  {
    name: "Full-Featured E-Commerce Platform for a Butcher Shop",
    description:
      "A secure, full-stack e-commerce platform built with Next.js, MongoDB, and Clerk authentication. It includes real-time inventory management, a feature-rich admin dashboard, seamless checkout, PDF invoice generation, Cloudinary-powered image handling, and custom analytics with ApexCharts. Prioritized scalability, user experience, and data integrity with JWT, form validation, and advanced rate-limiting.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Clerk", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "Cloudinary", color: "green-text-gradient" },
      { name: "ApexCharts", color: "pink-text-gradient" },
      { name: "Formik", color: "blue-text-gradient" },
      { name: "Yup", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" }
    ],
    image: project1_butcherShop,
    source_code_link: "https://github.com/NabilLamb/boucherie-D-or",
    demo_link: "https://boucherie-d-or.vercel.app/",
    results: [
      "Achieved 99.8% uptime with 500+ monthly users",
      "Reduced manual order processing time by 30%",
      "Increased user engagement by 15% using real-time push notifications",
      "Enhanced user experience with responsive UI and invoice printing",
      "Implemented strong security practices with Clerk, JWT, and rate limiting"
    ]
  },
  {
    name: "Sales Analytics Dashboard for E-commerce",
    description:
      "A dynamic sales and analytics dashboard using React.js and ECharts, offering real-time data visualizations for KPIs, stock levels, and customer insights. Integrated chart libraries (ECharts, Chart.js), MUI design system, and data filtering for an interactive business overview. Built with performance and scalability in mind using Vite, Zustand, and modular architecture.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "ECharts", color: "green-text-gradient" },
      { name: "Chart.js", color: "pink-text-gradient" },
      { name: "MUI", color: "blue-text-gradient" },
      { name: "Ant Design", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Zustand", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" }
    ],
    image: project2_Dashboard,
    source_code_link: "https://github.com/NabilLamb/sales-dashboard",
    demo_link: "https://e-commerce-dashboard-azure-ten.vercel.app/",
    results: [
      "Improved stock turnover rate by 20% via real-time inventory insights",
      "Reduced dashboard load times by 40% using Vite and optimized rendering",
      "Decreased mobile bounce rate by 25% through responsive design",
      "Ensured 100% data integrity across charts and exports"
    ]
  },
  {
    name: "Blog-Nabil: Full-Stack Blogging Platform",
    description:
      "A modern full-stack blogging platform using React (Vite) on the frontend and Express.js on the backend. Features include a rich-text editor, JWT-based authentication, MySQL integration, secure image uploads, and clean admin routing. Designed for performance and usability, with robust backend APIs, password encryption, and environment variable configuration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
      { name: "Multer", color: "green-text-gradient" },
      { name: "bcrypt", color: "pink-text-gradient" },
      { name: "SASS", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" }
    ],
    image: project3_Blog,
    source_code_link: "https://github.com/NabilLamb/Blog-Nabil",
    demo_link: "https://blog-nabil.vercel.app/",
    results: [
      "Enabled secure post creation with token-based authentication",
      "Integrated real-time client-side routing with React Router",
      "Streamlined image uploads and storage using Multer",
      "Enhanced UI with SASS-based styling and icon sets",
      "Protected user data with hashed passwords and JWT sessions"
    ]
  }
];


export { services, technologies, experiences, testimonials, projects };