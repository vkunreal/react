import { useParams } from "react-router";
import ChatList from "../ChatList";
import Chat from "../Chat";
import "./styles.css";

const initChats = {
  "chat-1": [
    { author: "You", text: "Hello!", id: "cht1-ms1" },
    { author: "You", text: "How are you?", id: "cht1-ms2" },
  ],
  "chat-2": [
    { author: "You", text: "Yeap!", id: "cht2-ms1" },
    { author: "You", text: "Nice weather today", id: "cht2-ms2" },
  ],
};

const chats = [
  { name: "Chat 1", id: "chat-1" },
  { name: "Chat 2", id: "chat-2" },
];

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
          <ChatList chatsList={chats} chatId={chatId} />
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
