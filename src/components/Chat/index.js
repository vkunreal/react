import { addChatFb } from "../../store/chats/actions";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageDb } from "../../store/messages/actions";
import MessagesList from "../MessageList";
import Form from "../Form";
import { useDispatch, useSelector } from "react-redux";

export default function Chat({ chatId }) {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const sendMessage = (message) => {
    dispatch(addMessageDb(chatId, message, "You", true));
  };

  const handleAddChat = (name) => {
    const id = `chat-${Date.now()}`;

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
