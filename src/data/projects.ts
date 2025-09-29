
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ShiningCarz - Car wash booking website",
    description: "A web application for booking car wash services, featuring user authentication and payment integration.",
    image: "/imgs/p1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "",
      live: "https://app.shiningcarz.in/",
    },
  },
  {
    id: 2,
    title: "Code-Snappets ",
    description: "A modern, feature-rich web application that transforms your code into beautiful, customizable images perfect for social media, documentation, presentations, and more.",
    image: "/imgs/p2.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express"],
    links: {
      github: "https://github.com/kaife0/code-snappets",
      live: "https://code-snappets.netlify.app/",
    },
  },
  {
    id: 3,
    title: "Video Frames Extractor",
    description: "A modern React + TypeScript web application for extracting frames from videos and finding similar frames using AI-powered vector similarity search.",
    image: "/imgs/p3.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "vector"],
    links: {
      github: "https://github.com/kaife0/frames-extractor-frontend",
      live: "https://frameer.netlify.app/"
    },
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A personal finance management tool built with React and Tailwind CSS, helping users track their expenses and savings.",
    image: "/imgs/p4.png",
    tags: ["React", "Typescript", "CSS3", "LocalStorage"],
    links: {
      github: "https://github.com/kaife0/finance",
      live: "",
    },
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
    image: "/imgs/p6.png",
    tags: ["React", "Typescript", "CSS3", "Tailwind CSS"],
    links: {
      github: "https://github.com/kaife0/portfolio",
      live: "",
    },
  },
  {
    id: 6,
    title: "Blog Manager",
    description: "A blog management system built with React and Tailwind CSS, allowing users to create, edit, and manage their blog posts.",
    image: "/imgs/p5.png",
    tags: ["React", "Typescript", "Node.js", "MongoDB", "Rest API"],
    links: {
      github: "https://github.com/kaife0/blog-website",
      live: "https://blog-website-umber-one.vercel.app",
    },
  },
];
