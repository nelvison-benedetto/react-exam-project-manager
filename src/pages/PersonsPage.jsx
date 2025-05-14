import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalProvider";
import { Link } from "react-router-dom";

export default function PersonsPage(){

    const {groupPersonsState} = useContext(GlobalContext);
    const {persons, setPersons} = groupPersonsState;

    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">Persons</h2>
          <div className="row">
            {persons.map((person) => (
              <div key={person.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{person.firstname + " " + person.lastname}</h5>
                    <div className="card-text">
                      <p className="mb-0">
                        <strong>Email</strong> {person.email}
                      </p>
                      <p>
                        <strong>Phone number</strong> {person.phoneNumber}
                      </p>
                    </div>
                    {person && (
                    <Link to={`/persons/${person.id}`} className="btn btn-sm btn-primary w-100 mt-3">
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