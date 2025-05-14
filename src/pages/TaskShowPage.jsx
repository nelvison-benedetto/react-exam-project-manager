import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TaskShowPage(){

    const { id } = useParams();  //'id' from the url
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);  //x read person.id after that person fetch is done

    useEffect(()=>{
        fetch(`http://localhost:8080/api/tasks/${id}`)  //alt+96(keyboard dx)
        .then(res => res.json())
        .then(response=>{
            setTask(response)
            setLoading(false);  //now can continue and dont stuck in condition 'if (loading)...'
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            setLoading(false);
        })
    },[id]);

    if (loading) return <div className="container mt-4">Loading...</div>;
    if (!task) return <div className="container mt-4">Task not found.</div>;

    return (
      <>
        <div className="container mt-4">
          <h2>Task Detail</h2>
          <div className="card shadow p-4">
            <div className="mb-2">
              <strong>ID:</strong> {task.id}
            </div>
            <div className="mb-2">
              <strong>Title:</strong> {task.title}
            </div>
            <div className="mb-2">
              <strong>Description:</strong> {task.description}
            </div>
            <div className="mb-2">
              <strong>Status:</strong> {task.status}
            </div>
            <div className="mb-2">
              <strong>Is Active:</strong> {task.isActive ? "Yes" : "No"}
            </div>
            <div className="mb-2">
              <strong>Is Completed:</strong> {task.isCompleted ? "Yes" : "No"}
            </div>
            <div className="mb-2">
              <strong>Priority:</strong> {task.priority}
            </div>
            <div className="mb-2">
              <strong>Due Date:</strong> {task.dueDate}
            </div>
            <div className="mb-2">
              <strong>Start Date:</strong> {task.taskStartDate}
            </div>
            <div className="mb-2">
              <strong>End Date:</strong> {task.taskEndDate}
            </div>
            <div className="mb-2">
              <strong>Created At:</strong> {task.createdAt}
            </div>
            <div className="mb-2">
              <strong>Updated At:</strong> {task.updatedAt}
            </div>

            <div className="mb-2">
              <strong>Project:</strong>{" "}
              {task.project ? (
                <>
                  {task.project.title} (ID: {task.project.id})
                </>
              ) : (
                "No project info"
              )}
            </div>

            <div className="mb-2">
              <strong>Messages:</strong>
              <ul>
                {task.messages && task.messages.length > 0 ? (
                  task.messages.map((msg) => (
                    <li key={msg.id}>
                      {msg.content || "Message"} (ID: {msg.id})
                    </li>
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