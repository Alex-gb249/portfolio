import type { Project } from "../types/Projects";

const initialProjects: Project[] = [
  {
    title: "Pomodoro",
    description: "A pomodoro based task manager",
    imageUrl: "pomodoro-page.webp",
    url: "https://pomodoro.axelis.dev"
  },
  {
    title: "Portfolio",
    description: "Esto parece un poco redundante, ¿no?",
    url: "#",
    isNewTab: false
  },
  {
    title: "Curriculum vitae",
    description: "Sitio donde puedes visualizar y descargar mi CV",
    imageUrl: "cv-page.webp",
    url: "https://cv.axelis.dev"
  },
];

export default initialProjects;
