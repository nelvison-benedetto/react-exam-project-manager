import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalProvider";

export default function UsersPage(){

    const {groupUsersState} = useContext(GlobalContext);
    const {users, setUsers} = groupUsersState;

    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">Users</h2>
          <div className="row">
            {users.map((user) => (
              <div key={user.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">
                      <strong>ID:</strong> {user.id}
                    </p>
                    {/* <p className="card-text">
                      <strong>Roles:</strong>{" "}
                      {user.roles.map((r) => r.name).join(", ")}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}