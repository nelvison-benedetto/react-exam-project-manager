import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PersonShowPage(){

    const { id } = useParams();  //'id' from the url
    const [person, setPerson] = useState(null);
    const [loading, setLoading] = useState(true);  //x read person.id after that person fetch is done

    useEffect(()=>{
        fetch(`http://localhost:8080/api/persons/${id}`)  //alt+96(keyboard dx)
        .then(res => res.json())
        .then(response=>{
            setPerson(response)
            setLoading(false);  //now can continue and dont stuck in condition 'if (loading)...'
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            setLoading(false);
        })
    },[id]);

    if (loading) return <div className="container mt-4">Loading...</div>;
    if (!person) return <div className="container mt-4">Person not found.</div>;


    return (
      <>

        <div className="container mt-4">
          <h2>Person Detail</h2>
          <div className="card shadow p-4">
            <div className="mb-2">
              <strong>ID:</strong> {person.id}
            </div>
            <div className="mb-2">
              <strong>Name:</strong> {person.firstname} {person.lastname}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {person.email}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {person.phoneNumber}
            </div>
            <div className="mb-2">
              <strong>Country:</strong> {person.country}
            </div>
            <div className="mb-2">
              <strong>Birthdate:</strong> {person.birthdate}
            </div>
            <div className="mb-2">
              <strong>Company:</strong>{" "}
              {person.company ? person.company.name : "No company"}
            </div>
            <div className="mb-2">
              <strong>Client:</strong>{" "}
              {person.client ? person.client.id : "No client"}
            </div>
            <div className="mb-0">
              <strong>Projects:</strong>
              <ul>
                {person.projects && person.projects.length > 0 ? (
                  person.projects.map((project) => (
                    <li key={project.id}>
                      {project.name || `Project #${project.id}`}
                    </li>
                  ))
                ) : (
                  <li>No projects</li>
                )}
              </ul>
            </div>
            <div className="mb-0">
              <strong>Messages:</strong>
              <ul>
                {person.messages && person.messages.length > 0 ? (
                  person.messages.map((msg) => (
                    <li key={msg.id}>{msg.content || `Message #${msg.id}`}</li>
                  ))
                ) : (
                  <li>No messages</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}