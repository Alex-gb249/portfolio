import Card from "../components/card/Card"
import projects from "../data/projects"

function Projects() {

  return (
    <div className="p-4">
      <h1 className="text-center mb-3">Projects</h1>
      <div className="row g-3 justify-content-center">
        {projects.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <Card title={project.title} description={project.description} imageUrl={project.imageUrl} linkUrl={project.linkUrl} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects