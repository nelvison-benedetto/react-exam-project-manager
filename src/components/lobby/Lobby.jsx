import { NavLink } from "react-router-dom";

export default function Lobby(){

    return (
      <>
        <div className="container mt-5 text-center">
          <h2 className="" style={{marginBottom: "2rem"}}>Welcome to Nubbin™ Technologies</h2>

          <div className="card p-3 d-grid gap-3 col-6 mx-auto">
            <NavLink to="/persons" className="btn btn-primary">
              Go to Persons
            </NavLink>
            <NavLink to="/companies" className="btn btn-primary">
              Go to Companies
            </NavLink>

            <NavLink to="/projects" className="btn btn-primary">
              Go to Projects
            </NavLink>
            <NavLink to="/tasks" className="btn btn-primary">
              Go to Tasks
            </NavLink>
            <NavLink to="/messages" className="btn btn-primary">
              Go to Messages
            </NavLink>
          </div>
        </div>
      </>
    );
}