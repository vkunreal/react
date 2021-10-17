import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ChatList from "../ChatList";
import Chat from "../Chat";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { initMessages } from "../../store/messages/actions";
import { initChats } from "../../store/chats/actions";
import "./styles.scss";

export default function Chats() {
  const { chatId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initChats());
    dispatch(initMessages());
  }, []);

  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);

  let isHasLink = true;

  if (
    (chatId && chats.filter((elem) => elem.id === chatId).length) ||
    !chats.length
  ) {
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
