import {
  html,
  css,
  javascript,
  typescript,
  react,
  redux,
  vite,
  threejs,
  jquery,
  sass,
  bootstrap,
  tailwindcss,
  fontawesome,
  wordpress,
  django,
  mysql,
  mongodb,
  git,
  github,
  emailjs,
  figma,
} from "../assets/icons/skills";

import { khai, hackathon, courses, freelance } from "../assets/icons/experiences";

import {
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Local development server",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: "jQuery",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: fontawesome,
    name: "Font Awesome",
    type: "Frontend",
  },
  {
    imageUrl: wordpress,
    name: "WordPress",
    type: "Frontend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: emailjs,
    name: "EmailJS",
    type: "WebUtils",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
];

export const experiences = [
  {
    title: "Academic Activity",
    event_name: "Khai Education",
    icon: khai,
    iconBg: "#87BDCC",
    date: "Sep 2019 - Present",
    points: [
      "Development of responsive web applications using HTML, CSS, and JS, including SEO principles.",
      "Utilization of Django and React in the creation of three academic projects, including a thesis project featuring the A* algorithm.",
      "Skills in planning and developing relational (MySQL, MSSQL) and non-relational (MongoDB) databases.",
      "Proficiency in using Git for version control.",
    ],
  },
  {
    title: "Innovative Event",
    event_name: "Hack4UA & GameJam",
    icon: hackathon,
    iconBg: "#ADCC83",
    date: "Oct 2022 - Feb 2023",
    points: [
      "Leading a team in project development at all stages, with 5 members, as a team lead, improving collaborative development skills using Git.",
      "Enhancing the web design process using Figma.",
      "Learning a new technology, React Native, and familiarizing oneself with the basic principles of API.",
      "Acquiring skills in testing a completed web product.",
    ],
  },
  {
    title: "Self Study",
    event_name: "Curses & GitHub portfolio",
    icon: courses,
    iconBg: "#C183CC",
    date: "Feb 2023 - Present",
    points: [
      "Completion and certification of courses: Wildau-Kharkiv IT Bridge: MongoDB; freeCodeCamp: Front End Development Libraries, Responsive Web Design.",
      "Regular solving of algorithmic challenges on CodeWars, level 4kyu.",
      "Development of over 10 functional web applications hosted on Git.",
      "Active participation in online marathons (such as GoIT, IT-Brains) and conferences (such as PerSyC 2024, events by VSPSV KhAI).",
    ],
  },
  {
    title: "Freelance Work",
    event_name: "Study order",
    icon: freelance,
    iconBg: "#CCA987",
    date: "Sep 2023 - Present",
    points: [
      "Completed over 40 academic projects of varying complexity, including practical assignments and web-based projects.",
      "Specialization in geodesy, with experience in utilizing services such as My Maps, Google Maps Platform, Google Earth Engine, and ArcGIS Online.",
    ],
  },
];

export const projects = [ // todo: add my data
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
