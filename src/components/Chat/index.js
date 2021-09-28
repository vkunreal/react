import MessagesList from "../MessageList";
import Form from "../Form";
import {
  addChatWithMessage,
  addMessage,
  addMessageDb,
  addMessageWithReply,
} from "../../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { addChat, addChatFb } from "../../store/chats/actions";
import { selectMessages } from "../../store/messages/selectors";

export default function Chat({ chatId }) {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  const sendMessage = (message) => {
    // dispatch(addMessageWithReply(chatId, message, "You"));
    dispatch(addMessageDb(chatId, message, "You"));
  };

  const handleAddChat = (name) => {
    const id = `chat-${Date.now()}`;
    // dispatch(addChatWithMessage(id));
    // dispatch(addChat(name, id));
    dispatch(addChatFb(name, id));
    dispatch(addMessageDb(id, "Test", "Bot"));
  };

  return (
    <div>
      <div>
        <Form
          className="messageForm"
          onClick={sendMessage}
          label="Сообщение"
          text="Отправить"
        />
      </div>
      <section>
        <MessagesList chatsList={messages} chatId={chatId} />
        <Form label="Чат" text="Добавить" onClick={handleAddChat} />
      </section>
    </div>
  );
}
