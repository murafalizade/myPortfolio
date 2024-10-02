import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  edulogy,
  cybernet, cubics, ailab, risk, resootime, badminton, dashboard
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Cybernet LLC",
    icon: cybernet,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
          "Worked on the Internet Vergi İdarəsi (e-portal) project, contributing to the development and maintenance of the platform",
          "Developed and enhanced the e-taxes project, including the admin panel of e-taxes",
          "Added new modules to improve functionality and expand the capabilities of the system",
          "Redesigned the UI of the profile section to enhance user experience and interface aesthetics",
          "Refactored existing code to improve performance, maintainability, and scalability",
          "Fixed code and logic bugs during the development"
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Cubics Technology LLC",
    icon: cubics,
    iconBg: "#E6DEDD",
    date: "June 2023 - March 2024",
    points: [
      "Built CRM systems for companies such as VIPLife MMC and Modern Construction MMC using Node.js and Meteor.js\n",
      "Managed databases with MongoDB to ensure efficient data storage and retrieval\n",
      "Implemented analytic approaches in system design to enhance performance and user insights\n",
      "Fixed critical issues and implemented feature enhancements for an online education platform\n",
      "Improved user experience and functionality by resolving code issues and implementing responsive design enhancements covering both front-end and back-end functionalities",
      "Design, implement, and optimize database structures to NoSQL",
      "Implement and enhance business logic for the system"

    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Azerbaijan Artificial Intelligence Lab",
    icon: ailab,
    iconBg: "#383E56",
    date: "June 2022 - Aug 2022",
    points: [
      "Code new features, integrate APIs",
      "Create dashboards and web app based UI with React/TS",
      "Contribute to bug fixes, ensure responsive UI design"
    ],
  },
  {
    title: "Software Developer",
    companyName: "R.I.S.K.",
    icon: risk,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2022",
    points: [
      "Design and implement secure and efficient restfull APIs using ASP.NET Core",
      "Develop and maintain database schema, utilizing Entity Framework Core, and optimize data access for improved application performance",
    "Establish and maintain Git version control, utilizing branching strategies and pull requests for efficient collaboration"

    ],
  },
];

const projects: TProject[] = [
  {
    name: "ResooTime",
    description:
      "ResooTime is a cutting-edge reservation marketplace for restaurants, built with Next.js. Our platform offers an intuitive visual table selection feature, enabling users to effortlessly reserve their ideal dining spot. With comprehensive restaurant listings, detailed menus, and real-time availability, finding the perfect place to dine has never been easier. Restaurant owners benefit from a user-friendly admin panel to manage reservations and customer feedback effectively. Experience seamless dining reservations with ResooTime, where every table is just a click away!",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: resootime,
    sourceCodeLink: "https://github.com/murafalizade/resootime",
  },
  {
    name: "Badminton",
    description:
      "The official website of the Badminton Federation of Azerbaijan serves as a central hub for all badminton-related activities in the country. It features news, event schedules, player profiles, and resources for coaches and enthusiasts. The site promotes the growth of badminton, providing updates on tournaments and development programs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: badminton,
    sourceCodeLink: "https://badmintonazerbaijan.com/az",
  },
  {
    name: "Dashboard App",
    description:
        "Introducing our vibrant dashboard app, designed for intuitive data visualization. With stunning graphs, interactive maps, and dynamic charts, users can easily analyze and interpret complex data. The colorful interface enhances user experience, making it easy to track metrics, identify trends, and gain insights. Perfect for businesses and individuals alike, our app transforms data into engaging visuals for informed decision-making.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    sourceCodeLink: "https://github.com/murafalizade/dashboard",
  },
  {
    name: "Edulogy",
    description:
        "Welcome to our Data Science Course website, your gateway to mastering the art of data analysis and interpretation. Featuring an extensive library of course videos, interactive quizzes, and engaging visuals, our platform offers a comprehensive learning experience. Explore topics ranging from machine learning to data visualization, and gain practical skills through hands-on projects. With expert instructors guiding you every step of the way, you'll build a strong foundation in data science and unlock exciting career opportunities. Join us today and start your journey into the world of data!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: edulogy,
    sourceCodeLink: "https://murafalizade.github.io/edu-tach.github.io/",
  },
];

export { services, technologies, experiences, projects };
