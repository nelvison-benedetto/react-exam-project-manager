import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalProvider";

export default function TasksPage(){

    const {groupTasksState} = useContext(GlobalContext);
    const {tasks, setTasks} = groupTasksState;

    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">Tasks</h2>
          <div className="row">
            {tasks.map((task) => (
              <div key={task.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <div className="card-text">
                      <p className="mb-0">
                        <strong>priority</strong> {task.priority}
                      </p>
                      <p>
                        <strong>dueDate</strong> {task.dueDate}
                      </p>
                    </div>
                    {task && (
                      <Link
                        to={`/tasks/${task.id}`}
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