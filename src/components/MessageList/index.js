import { useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { Message } from "../Message";
import "./styles.scss";

export default function MessagesList({ chatId }) {
  const messages = useSelector(selectMessages)[chatId];

  console.log(messages, "c");

  return (
    <div className="messagesContainer">
      {chatId &&
        Object.values(messages).map((el) => (
          <Message key={el.id} author={el.author} text={el.text} />
        ))}
    </div>
  );
}
