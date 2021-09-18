import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

export default function MessagesList({ chatsList, chatId }) {
  const chats = useSelector((state) => state.messages);

  return (
    <div className="messagesContainer">
      {!!chatId &&
        chats[chatId].map((el) => {
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
