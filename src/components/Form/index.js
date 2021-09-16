import React, { useState } from "react";
import "./styles.css";

export default function Form(props) {
  const [message, setMessage] = useState("");

  const changeMessage = (e) => {
    setMessage((prevValue) => (prevValue = e.target.value));
  };

  const sendMessage = () => {
    props.onClick(message);
    setMessage("");
  };

  return (
    <div className="form">
      <div>
        <input type="text" value={message} onChange={changeMessage} />
      </div>
      <div>
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}
