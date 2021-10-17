import { useSelector } from "react-redux";
import { Message } from "../Message";
import { selectMessages } from "../../store/messages/selectors";
import { selectUserName } from "../../store/profile/selectors";
import "./styles.scss";

const MessagesList = ({ chatId }) => {
  const messages = useSelector(selectMessages)[chatId];
  const author = useSelector(selectUserName);

  return (
    <div className="messagesContainer">
      {chatId &&
        Object.values(messages).map((el) => (
          <Message
            messClass={author === el.author ? "authMess" : "foreignMess"}
            key={el.id}
            author={el.author}
            text={el.text}
          />
        ))}
    </div>
  );
};

export default MessagesList;
