
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["C", "JavaScript", "Java", "C++", "TypeScript", "HTML/CSS"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Bootstrap" ,"Framer Motion", "Three.js"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "VS Code", "Docker", "Copilot", "N8N","web3", "Postman", "OpenAI"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma",  "UI/UX Design", "Prototyping"],
  },
];
