import { ref, onValue, set } from "firebase/database";
import { db } from "../../services/firebase";
import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_CHAT_WITH_MESSAGES = "MESSAGES:ADD_CHAT_WITH_MESSAGES";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (chatId, text, author) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    text,
    author,
  },
});

export const addChatWithMessage = (id) => ({
  type: ADD_CHAT_WITH_MESSAGES,
  payload: {
    id,
  },
});

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const addMessageWithReply = (chatId, text, author) => (dispatch) => {
  dispatch(addMessage(chatId, text, author));

  if (author.toLowerCase() === AUTHORS.HUMAN) {
    setTimeout(() => {
      dispatch(addMessage(chatId, "Hey, I'm Bot!", AUTHORS.BOT));
    }, 500);
  }
};

export const initMessages = () => (dispatch) => {
  const messagesDbRef = ref(db, "messages");

  onValue(messagesDbRef, (snapshot) => {
    const data = snapshot.val();

    dispatch(setMessages(data || {}));
  });
};

export const addMessageDb =
  (chatId, text, author, botAnswer = false) =>
  () => {
    const id = `message-${Date.now()}`;

    const messagesDbRef = ref(db, `messages/${chatId}/${id}`);

    set(messagesDbRef, {
      author,
      text,
      id,
    });

    if (botAnswer) {
      setTimeout(() => {
        const id = `message-${Date.now()}`;
        const messagesDbRef = ref(db, `messages/${chatId}/${id}`);

        set(messagesDbRef, {
          author: AUTHORS.BOT,
          text: `Hey, I'm ${AUTHORS.BOT}`,
          id,
        });
      }, 500);
    }
  };
