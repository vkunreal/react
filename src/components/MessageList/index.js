import { useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { Message } from "../Message";
import "./styles.scss";

export default function MessagesList({ chatId }) {
  const chats = useSelector(selectMessages);

  return (
    <div className="messagesContainer">
      {!!chatId &&
        chats[chatId].map((el) => (
          <Message key={el.id} author={el.author} text={el.text} />
        ))}
    </div>
  );
}
