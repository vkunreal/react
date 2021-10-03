import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ChatList from "../ChatList";
import Chat from "../Chat";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { initMessages } from "../../store/messages/actions";
import { initChats } from "../../store/chats/actions";
import { child, get, ref } from "@firebase/database";
import { db } from "../../services/firebase";
import { selectId } from "../../store/profile/selectors";
import { changeName } from "../../store/profile/actions";
import AddChatForm from "../AddChatForm";
import "./styles.scss";

const Chats = () => {
  const { chatId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initChats());
    dispatch(initMessages());
  }, [dispatch]);

  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const id = useSelector(selectId);

  let isHasLink = true;

  if (chatId && chats.filter((elem) => elem.id === chatId).length) {
    isHasLink = true;
  } else {
    isHasLink = false;
  }

  useEffect(() => {
    const dbRef = ref(db);

    get(child(dbRef, "profile")).then((snapshot) => {
      let name;

      Object.values(snapshot.val()).forEach((item) => {
        if (item.id === id) {
          name = item.username;
        }
      });

      dispatch(changeName(name));
    });
  }, [dispatch, id]);

  return (
    <div className="container">
      <main>
        <section className="chatSection">
          <ChatList chatId={chatId} />
        </section>

        <div className="messageAndChatCont">
          <section>
            <AddChatForm />
          </section>

          {isHasLink && (
            <section className="chatContainer">
              <Chat initChats={messages} chatId={chatId} />
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default Chats;
