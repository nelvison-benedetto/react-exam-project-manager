import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalProvider";

export default function ProjectsPage(){

    const {groupProjectsState} = useContext(GlobalContext);
    const {projects, setProjects} = groupProjectsState;

    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">projects</h2>
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <div className="card-text">
                      <p className="mb-0">
                        <strong>category</strong> {project.category}
                      </p>
                      <p>
                        <strong>budget</strong>{" "}
                        {project.budget}
                      </p>
                    </div>
                    {project && (
                      <Link
                        to={`/projects/${project.id}`}
                        className="btn btn-sm btn-primary w-100 mt-3"
                      >
                        Show
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}