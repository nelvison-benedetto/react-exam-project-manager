import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MessageShowPage() {

    
    const { id } = useParams();  //'id' from the url
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);  //x read person.id after that person fetch is done

    useEffect(()=>{
        fetch(`http://localhost:8080/api/messages/${id}`)  //alt+96(keyboard dx)
        .then(res => res.json())
        .then(response=>{
            setMessage(response)
            setLoading(false);  //now can continue and dont stuck in condition 'if (loading)...'
        })
        .catch(error => {
            console.log("Error fetching data:", error);
            setLoading(false);
        })
    },[id]);

    if (loading) return <div className="container mt-4">Loading...</div>;
    if (!message) return <div className="container mt-4">Message not found.</div>;
    

    return (
      <>
        <div className="container mt-4">
          <h2>Message Detail</h2>
          <div className="card shadow p-4">
            <div className="mb-2">
              <strong>ID:</strong> {message.id}
            </div>
            <div className="mb-2">
              <strong>Content:</strong> {message.content}
            </div>
            <div className="mb-2">
              <strong>Created At:</strong> {message.createdAt}
            </div>
            <div className="mb-2">
              <strong>Updated At:</strong> {message.updatedAt}
            </div>

            <div className="mb-2">
              <strong>Task:</strong>{" "}
              {message.task ? (
                <>
                  {message.task.title} (ID: {message.task.id})
                </>
              ) : (
                "No task info"
              )}
            </div>

            <div className="mb-0">
              <strong>Author (Person):</strong>{" "}
              {message.person ? (
                <>
                  {message.person.firstname} {message.person.lastname} (ID:{" "}
                  {message.person.id})
                </>
              ) : (
                "No person info"
              )}
            </div>
          </div>
        </div>
      </>
    );
}