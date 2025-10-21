import { createContext, useState, type ReactNode } from 'react';
import initialProjects from '../data/projects';
import type { Project } from '../types/Projects';

type ProjectsContextValue = {
  projects: Project[];
  updateProjects: (newProjects: Project[]) => void;
};

export const ProjectsContext = createContext<ProjectsContextValue>({
  projects: [],
  updateProjects: () => {},
});

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const updateProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
  }

  return (
    <ProjectsContext.Provider value={{projects, updateProjects}}>
      {children}
    </ProjectsContext.Provider>
  );
};