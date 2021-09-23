import { useEffect } from "react";
import MessagesList from "../MessageList";
import Form from "../Form";
import { addChatWithMessage, addMessage } from "../../store/messages/actions";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { selectAuthor, selectMessages } from "../../store/messages/selectors";

export default function Chat({ chatId }) {
  const messages = useSelector(selectMessages);
  const last = useSelector(selectAuthor(chatId));
  const dispatch = useDispatch();

  const sendMessage = (message) => {
    dispatch(addMessage(chatId, message, "You"));
  };

  const botAnswer = () => {
    dispatch(addMessage(chatId, "Hey, I'm Bot!", "Bot"));
  };

  const handleAddChat = (name) => {
    const id = `chat-${Date.now()}`;
    dispatch(addChatWithMessage(id));
    dispatch(addChat(name, id));
  };

  useEffect(() => {
    if (last === "You") {
      setTimeout(botAnswer, 500);
    }
  }, [messages]);

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
