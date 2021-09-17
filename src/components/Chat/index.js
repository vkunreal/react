import { useState, useEffect } from "react";
import MessagesList from "../MessageList";
import Form from "../Form";

export default function Chat({ initChats, chatId }) {
  const [messages, setMessages] = useState(initChats);

  const sendMessage = (message) => {
    setMessages((prevChats) => ({
      ...prevChats,
      [chatId]: {
        ...prevChats[chatId],
        messages: [
          ...prevChats[chatId].messages,
          {
            author: "You",
            text: message,
            id: `message-${Date.now()}`,
          },
        ],
      },
    }));
  };

  const botAnswer = () => {
    setMessages((prevChats) => ({
      ...prevChats,
      [chatId]: {
        ...prevChats[chatId],
        messages: [
          ...prevChats[chatId].messages,
          {
            author: "Bot",
            text: "Hey, I'm Bot!",
            id: `message-${Date.now()}`,
          },
        ],
      },
    }));
  };

  useEffect(() => {
    if (
      messages[chatId].messages[messages[chatId].messages.length - 1]
        ?.author === "You" &&
      messages[chatId].messages.length > 2
    ) {
      setTimeout(botAnswer, 500);
    }
  }, [messages]);

  return (
    <div>
      <div>
        <Form className="messageForm" onClick={sendMessage} />
      </div>
      <section>
        <MessagesList chatsList={messages} chatId={chatId} />
      </section>
    </div>
  );
}
