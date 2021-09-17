import { useParams } from "react-router";
import ChatList from "../ChatList";
import Chat from "../Chat";
import "./styles.css";

const initChats = {
  "chat-1": {
    name: "Chat 1",

    messages: [
      { author: "You", text: "Hello!", id: "cht1-ms1" },
      { author: "You", text: "How are you?", id: "cht1-ms2" },
    ],
  },
  "chat-2": {
    name: "Chat 2",

    messages: [
      { author: "You", text: "Yeap!", id: "cht2-ms1" },
      { author: "You", text: "Nice weather today", id: "cht2-ms2" },
    ],
  },
};

export default function Chats() {
  const { chatId } = useParams();
  let isHasLink;

  if (
    !!chatId &&
    parseInt(chatId.match(/\d+/)) <= Object.keys(initChats).length
  ) {
    isHasLink = true;
  } else {
    isHasLink = false;
  }

  return (
    <div className="container">
      <main>
        <section className="chatSection">
          <ChatList chatsList={initChats} chatId={chatId} />
        </section>

        {isHasLink && (
          <section className="chatContainer">
            <Chat initChats={initChats} chatId={chatId} />
          </section>
        )}
      </main>
    </div>
  );
}
