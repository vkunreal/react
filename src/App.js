import { useState, useEffect } from "react";
import MessagesList from "./components/MessageList";
import Form from "./components/Form";
import ChatList from "./components/ChatList";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([
    {
      name: "Chat 1",
      id: "chat-1",
    },
    {
      name: "Chat 2",
      id: "chat-2",
    },
  ]);

  const sendMessage = (message) => {
    setMessages([
      ...messages,
      {
        message,
        author: "You",
        id: `message-${Date.now()}`,
      },
    ]);
  };

  const botAnswer = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        author: "Bot",
        message: "Hey, I'm Bot!",
        id: `message-${Date.now()}`,
      },
    ]);
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "You") {
      setTimeout(botAnswer, 500);
    }
  }, [messages]);

  return (
    <div className="container">
      <header>
        <Form onClick={sendMessage} />
      </header>
      <main>
        <section className="chatSection">
          <ChatList />
        </section>
        <section className="messageSection">
          <MessagesList messages={messages} />
        </section>
      </main>
    </div>
  );
}

export default App;
