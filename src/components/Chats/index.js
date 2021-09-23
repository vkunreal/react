import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ChatList from "../ChatList";
import Chat from "../Chat";
import "./styles.scss";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";

export default function Chats() {
  const { chatId } = useParams();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);

  let isHasLink;

  if (chatId && chats.filter((elem) => elem.id === chatId).length) {
    isHasLink = true;
  } else {
    isHasLink = false;
  }

  return (
    <div className="container">
      <main>
        <section className="chatSection">
          <ChatList chatId={chatId} />
        </section>

        {isHasLink && (
          <section className="chatContainer">
            <Chat initChats={messages} chatId={chatId} />
          </section>
        )}
      </main>
    </div>
  );
}
