import React from "react";
import "./styles.css";

export default function MessagesList({ chatsList, chatId }) {
  return (
    <div className="messagesContainer">
      {!!chatId &&
        chatsList[chatId].messages.map((el) => {
          return (
            <div className="messageContainer" key={el.id}>
              <div>{el.author}:</div>
              <div className="message">{el.text}</div>
            </div>
          );
        })}
    </div>
  );
}
