import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [textMessage, setTextMessage] = useState("");

  function addMessage(e) {
    e.preventDefault();
    const newMessage = [...message];
    newMessage.push(textMessage);
    setMessage(newMessage);
  }
  function deleteMessage(index) {
    const newMessage = [...message];
    newMessage.splice(index, 1);
    setMessage(newMessage);
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={textMessage}
            onChange={(e) => {
              setTextMessage(e.target.value);
            }}
          />
        </label>
        <button
          onClick={textMessage !== "" ? addMessage : null}
          className="submit-message-button"
        >
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <h1 className="message" key={index}>
              {item}
              <button type="Submit"
                onClick={() => {
                  deleteMessage(index);
                }}
                className="delete-button"
              >
                x
              </button>
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
