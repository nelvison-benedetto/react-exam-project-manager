import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CompanyShowPage(){

    const { id } = useParams();  //'id' from the url
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);  //x read person.id after that person fetch is done

    useEffect(()=>{
        fetch(`http://localhost:8080/api/companies/${id}`)  //alt+96(keyboard dx)
        .then(res => res.json())
        .then(response=>{
            setCompany(response)
            setLoading(false);  //now can continue and dont stuck in condition 'if (loading)...'
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            setLoading(false);
        })
    },[id]);

    if (loading) return <div className="container mt-4">Loading...</div>;
    if (!company) return <div className="container mt-4">Company not found.</div>;


    return (
      <>
        <div className="container mt-4">
          <h2>Company Detail</h2>
          <div className="card shadow p-4">
            <div className="mb-2">
              <strong>ID:</strong> {company.id}
            </div>
            <div className="mb-2">
              <strong>Legal Name:</strong> {company.companyLegalName}
            </div>
            <div className="mb-2">
              <strong>Username:</strong> {company.companyUsername}
            </div>
            <div className="mb-2">
              <strong>EIN:</strong> {company.companyEIN}
            </div>
            <div className="mb-2">
              <strong>State Tax ID:</strong> {company.companyStateTaxID}
            </div>

            <div className="mb-2">
              <strong>Client:</strong>{" "}
              {company.client ? `Client ID: ${company.client.id}` : "No client"}
            </div>

            <div className="mb-0">
              <strong>Projects:</strong>
              <ul>
                {company.projects && company.projects.length > 0 ? (
                  company.projects.map((project) => (
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
              <strong>Persons:</strong>
              <ul>
                {company.persons && company.persons.length > 0 ? (
                  company.persons.map((person) => (
                    <li key={person.id}>
                      {person.firstname} {person.lastname} (ID: {person.id})
                    </li>
                  ))
                ) : (
                  <li>No persons</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}