import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessagesList from "../MessageList";
import Form from "../Form";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageDb } from "../../store/messages/actions";
import { selectUserName } from "../../store/profile/selectors";
import "./styles.scss";

export const setScroll = () => {
  const div = document.getElementsByClassName("messagesContainer")[0];
  div.scrollTop = div.scrollHeight;
};

const Chat = ({ chatId }) => {
  const messages = useSelector(selectMessages);
  const name = useSelector(selectUserName);

  const dispatch = useDispatch();

  const sendMessage = (message) => {
    dispatch(addMessageDb(chatId, message, name));
  };

  useEffect(() => setScroll(), []);

  return (
    <div>
      <section>
        <MessagesList chatsList={messages} chatId={chatId} />
      </section>

      <section className="messageFormCont">
        <Form
          className="messageForm"
          onClick={sendMessage}
          label="Сообщение"
          text="Отправить"
        />
      </section>
    </div>
  );
};

export default Chat;
