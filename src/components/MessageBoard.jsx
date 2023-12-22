import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  function handleInput() {
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      setInputMessage([...inputMessage, trimmedMessage]);
      setNewMessage("");
    }
  }
  function handleDeleteButton(index) {
    const newArray = [...inputMessage];
    newArray.splice(index, 1);
    setInputMessage(newArray);
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleInput}>
          Submit
        </button>
      </div>
      <div className="board">
        {inputMessage.map((item, index) => (
          <div className="message" key={index}>
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => handleDeleteButton(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
