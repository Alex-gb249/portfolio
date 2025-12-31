import './PageVisualizer.css';
import { useContext } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";

function PageVisualizer() {

  const { selectedProject } = useContext(ProjectsContext);

  return (
    selectedProject ? 
    <div className="page-visualizer rounded border border-black h-100">
      <iframe className="h-100 w-100 rounded" src={selectedProject.url} />
    </div> 
    : null
  )
}

export default PageVisualizer