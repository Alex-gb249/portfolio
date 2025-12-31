import { createContext, useState, type ReactNode } from 'react';
import initialProjects from '../data/projects';
import type { Project } from '../types/Projects';

type ProjectsContextValue = {
  projects: Project[];
  updateProjects: (newProjects: Project[]) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
};

export const ProjectsContext = createContext<ProjectsContextValue>({
  projects: [],
  updateProjects: () => {},
  selectedProject: null,
  setSelectedProject: () => {}
});

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
  }

  return (
    <ProjectsContext.Provider value={{projects, updateProjects, selectedProject, setSelectedProject}}>
      {children}
    </ProjectsContext.Provider>
  );
};