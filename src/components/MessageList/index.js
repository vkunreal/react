import React, { useState, useEffect } from "react";
import "./styles.css";

export default function MessagesList(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(props.messages);
  }, [props.messages]);

  return (
    <div className="messagesContainer">
      {messages.map((el) => {
        return (
          <div className="messageContainer">
            <div>{el.author}:</div>
            <div className="message">{el.message}</div>
          </div>
        );
      })}
    </div>
  );
}
