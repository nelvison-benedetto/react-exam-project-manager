import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectShowPage(){

    const { id } = useParams();  //'id' from the url
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);  //x read person.id after that person fetch is done

    useEffect(()=>{
        fetch(`http://localhost:8080/api/projects/${id}`)  //alt+96(keyboard dx)
        .then(res => res.json())
        .then(response=>{
            setProject(response)
            setLoading(false);  //now can continue and dont stuck in condition 'if (loading)...'
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            setLoading(false);
        })
    },[id]);

    if (loading) return <div className="container mt-4">Loading...</div>;
    if (!project) return <div className="container mt-4">Project not found.</div>;
    

    return (
      <>
        <div className="container mt-4">
          <h2>Project Detail</h2>
          <div className="card shadow p-4">
            <div className="mb-2">
              <strong>ID:</strong> {project.id}
            </div>
            <div className="mb-2">
              <strong>Title:</strong> {project.title}
            </div>
            <div className="mb-2">
              <strong>Description:</strong> {project.description}
            </div>
            <div className="mb-2">
              <strong>Status:</strong> {project.status}
            </div>
            <div className="mb-2">
              <strong>Is Active:</strong> {project.isActive ? "Yes" : "No"}
            </div>
            <div className="mb-2">
              <strong>Is Completed:</strong>{" "}
              {project.isCompleted ? "Yes" : "No"}
            </div>
            <div className="mb-2">
              <strong>Category:</strong> {project.category}
            </div>
            <div className="mb-2">
              <strong>Budget:</strong> € {project.budget}
            </div>
            <div className="mb-2">
              <strong>Priority:</strong> {project.priority}
            </div>
            <div className="mb-2">
              <strong>Due Date:</strong> {project.dueDate}
            </div>
            <div className="mb-2">
              <strong>Start Date:</strong> {project.projectStartDate}
            </div>
            <div className="mb-2">
              <strong>End Date:</strong> {project.projectEndDate}
            </div>
            <div className="mb-2">
              <strong>Created At:</strong> {project.createdAt}
            </div>
            <div className="mb-2">
              <strong>Updated At:</strong> {project.updatedAt}
            </div>

            <div className="mb-0">
              <strong>Companies:</strong>
              <ul>
                {project.companies && project.companies.length > 0 ? (
                  project.companies.map((company) => (
                    <li key={company.id}>
                      {company.companyLegalName} (ID: {company.id})
                    </li>
                  ))
                ) : (
                  <li>No companies</li>
                )}
              </ul>
            </div>

            <div className="mb-0">
              <strong>Persons:</strong>
              <ul>
                {project.persons && project.persons.length > 0 ? (
                  project.persons.map((person) => (
                    <li key={person.id}>
                      {person.firstname} {person.lastname} (ID: {person.id})
                    </li>
                  ))
                ) : (
                  <li>No persons</li>
                )}
              </ul>
            </div>

            <div className="mb-0">
              <strong>Tasks:</strong>
              <ul>
                {project.tasks && project.tasks.length > 0 ? (
                  project.tasks.map((task) => (
                    <li key={task.id}>{task.title || `Task #${task.id}`}</li>
                  ))
                ) : (
                  <li>No tasks</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}