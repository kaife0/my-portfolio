
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
   {
    id: 1,
    title: "Young Java Proffesional - Infosys",
    type: "certification", 
    year: "2024",
    description: "Completed the Young Java Professional certification from Infosys.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Completed Software Engineering Job Simulation",
    type: "certification",
    year: "2024",
    description: "Completed a comprehensive job simulation program at JP Morgan Chase & Co. by Forage.",
    icon: Award,
  },
  {
    id: 3,
    title: "Computational Thinking and Problem Solving - Infosys",
    type: "certification",
    year: "2024",
    description: "Completed the Computational Thinking and Problem Solving certification from Infosys.",
    icon: Star,
  },
  {
    id: 4,
    title: " Co-ordinated College Fest",
    type: "academic",
    year: "2025",
    description: "Successfully coordinated the annual college fest, managing logistics and events.",
    icon: Star,
  },
  {
    id: 5,
    title: "Problem Solving Certification - HackerRank",
    type: "certification",
    year: "2024",
    description: "Completed the Problem Solving certification from HackerRank.",
    icon: Award,
  },
  {
    id: 6,
    title: "Front-End Developer (React) Certification",
    type: "certification",
    year: "2024",
    description: "Completed specialized training in Front-End Development with React.",
    icon: Award,
  },
];
