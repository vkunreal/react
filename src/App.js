import { useState, useEffect } from "react";
import MessagesList from "./components/MessageList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [sendedMessages, setSendedMessages] = useState(0);

  const sendMessage = (message) => {
    setMessages([
      ...messages,
      {
        message,
        author: "You",
      },
    ]);

    setSendedMessages((prevValue) => prevValue + 1);
  };

  const botAnswer = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        author: "Bot",
        message: "Hey, I'm Bot!",
      },
    ]);
  };

  useEffect(() => {
    if (sendedMessages) {
      setTimeout(botAnswer, 500);
    }
  }, [sendedMessages]);

  return (
    <div className="container">
      <div className="header">
        <Form onClick={sendMessage} />
      </div>
      <MessagesList messages={messages} />
    </div>
  );
}

export default App;
