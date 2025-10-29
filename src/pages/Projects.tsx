import { useContext } from "react"
import Card from "../components/card/Card"
import { ProjectsContext } from "../contexts/ProjectsContext"

function Projects() {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className="p-4">
      <h1 className="text-center mb-3">Projects</h1>
      <div className="row g-3 justify-content-center">
        {projects.map((project, index) => (
          <div className="col-12 col-sm-6 col-lg-3 col-xl-2" key={index}>
            <Card title={project.title} description={project.description} imageUrl={project.imageUrl} url={project.url} isNewTab={project.isNewTab} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects