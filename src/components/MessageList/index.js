import React from "react";
import { useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import "./styles.scss";

export default function MessagesList({ chatsList, chatId }) {
  const chats = useSelector(selectMessages);

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
