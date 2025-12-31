import { useContext } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";

function PageVisualizer() {

  const { selectedProject } = useContext(ProjectsContext);

  return (
    <div className="h-100">
      {selectedProject ? <iframe className="h-100 w-100 rounded" src={selectedProject.url} /> : null}
    </div>
  )
}

export default PageVisualizer