import { useContext } from "react"
import Card from "../components/card/Card"
import { ProjectsContext } from "../contexts/ProjectsContext"
import PageVisualizer from "../components/page-visualizer/PageVisualizer";
import { Project } from "../types/Projects";

function Projects() {
  const { projects, setSelectedProject } = useContext(ProjectsContext);

  const handleOnClick = (project: Project) => () => {
    setSelectedProject(project);
  }

  return (
    <div className="py-4 p-xl-4 d-flex flex-column">
      <h1 className="text-center mb-3">Projects</h1>
      <div className="row gx-0 flex-grow-1"> 
        <div className="col-xl-3 p-4 p-xl-0 pe-xl-4">
          <div className="row g-3 justify-content-center">
            {projects.map((project, index) => (
              <div className="" key={index}>
                <a onClick={handleOnClick(project)}>
                  <Card title={project.title} description={project.description} imageUrl={project.imageUrl} url={project.url} isNewTab={project.isNewTab} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="col col-xl">
          <PageVisualizer />
        </div>
      </div>
    </div>
  )
}

export default Projects