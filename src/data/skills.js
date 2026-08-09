import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaAws, FaDatabase, FaGitAlt, FaBolt } from "react-icons/fa";
import { SiFlask, SiDjango, SiScikitlearn, SiPostgresql } from "react-icons/si";

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython, level: 92 },
      { name: "Java", icon: FaJava, level: 75 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, level: 88 },
      { name: "CSS", icon: FaCss3Alt, level: 82 },
      { name: "React", icon: FaReact, level: 80 },
      { name: "Tailwind CSS", icon: FaCss3Alt, level: 78 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Flask", icon: SiFlask, level: 80 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: 78 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", icon: SiScikitlearn, level: 86 },
      { name: "Random Forest", icon: FaGitAlt, level: 84 },
            { name: "XGBoost", icon: FaBolt, level: 82 },
      { name: "Matplotlib", icon: FaCss3Alt, level: 75 },
      { name: "Model Evaluation", icon: FaCss3Alt, level: 84 },
    ],
  },
  
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: FaGitAlt, level: 86 },
      { name: "VS Code", icon: FaGitAlt, level: 85 },
      { name: "Postman", icon: FaGitAlt, level: 75 },
      { name: "Render", icon: FaAws, level: 70 },
      { name: "AWS", icon: FaAws, level: 72 },
    ],
  },
];
