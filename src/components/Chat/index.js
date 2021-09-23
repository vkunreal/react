import MessagesList from "../MessageList";
import Form from "../Form";
import {
  addChatWithMessage,
  addMessageWithReply,
} from "../../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { selectMessages } from "../../store/messages/selectors";

export default function Chat({ chatId }) {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const sendMessage = (message) => {
    dispatch(addMessageWithReply(chatId, message, "You"));
  };

  const handleAddChat = (name) => {
    const id = `chat-${Date.now()}`;
    dispatch(addChatWithMessage(id));
    dispatch(addChat(name, id));
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
