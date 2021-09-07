import React from "react";
import "./styles.css";

export default function MessagesList({ messages }) {
  return (
    <div className="messagesContainer">
      {messages.map((el) => {
        return (
          <div className="messageContainer" key={el.id}>
            <div>{el.author}:</div>
            <div className="message">{el.message}</div>
          </div>
        );
      })}
    </div>
  );
}
