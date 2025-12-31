import type { Project } from "../types/Projects";

const initialProjects: Project[] = [
  {
    title: "Pomodoro",
    description: "A pomodoro based task manager",
    imageUrl: "pomodoro-logo.png",
    url: "https://pomodoro.axelis.dev"
  },
  {
    title: "Portfolio",
    description: "Esto parece un poco redundante, ¿no?",
    imageUrl: "pomodoro-logo.png",
    url: "https://axelis.dev",
    isNewTab: false
  },
  {
    title: "Curriculum vitae",
    description: "Sitio donde puedes visualizar y descargar mi CV",
    imageUrl: "pomodoro-logo.png",
    url: "https://cv.axelis.dev"
  },
];

export default initialProjects;
