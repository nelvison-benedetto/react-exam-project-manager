import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalProvider";

export default function MessagesPage(){
    const {groupMessagesState} = useContext(GlobalContext);
    const {messages, setMessages} = groupMessagesState;

    return (
      <>
        <div className="container mt-4">
          <h2 className="mb-4">Messages</h2>
          <div className="row">
            {messages.map((message) => (
              <div key={message.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{message.content}</h5>
                    <div className="card-text">
                      <p className="mb-0">
                        <strong>createdAt</strong> {message.createdAt}
                      </p>
                      <p>
                        <strong>updatedAt</strong> {message.updatedAt}
                      </p>
                    </div>
                    {message && (
                      <Link
                        to={`/messages/${message.id}`}
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