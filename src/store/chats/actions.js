import { ref, onValue, set, get, child } from "firebase/database";
import { db } from "../../services/firebase";
import { initMessages } from "../messages/actions";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";

export const addChat = (name, id) => ({
  type: ADD_CHAT,
  payload: {
    name,
    id,
  },
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const initChats = () => (dispatch) => {
  const chatsDbRef = ref(db, "chats");
  onValue(chatsDbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(setChats(Object.values(data || {})));
  });
};

const isHaveUser = (users, userId) => {
  let isHave = false;

  Object.keys(users).forEach((item) => {
    if (users[item] === userId) isHave = true;
  });

  return isHave;
};

export const addChatFb = (name, fromUserId, toUser, id) => () => {
  const chatsDbRef = ref(db, `chats/${id}`);

  get(child(ref(db), "profile")).then((snapshot) => {
    const data = snapshot.val();
    let toUserId;

    Object.keys(data).forEach((item) => {
      if (data[item].email === toUser) {
        toUserId = item;
      }
    });

    get(child(ref(db), "chats")).then((snapshot) => {
      const data = snapshot.val();
      let isHave = false;

      if (data === null) {
        set(chatsDbRef, {
          id,
          name,
          users: [Number(fromUserId), Number(toUserId)],
        });

        return;
      }

      Object.keys(data).forEach((item) => {
        if (isHaveUser(data[item].users, toUserId)) isHave = true;
      });

      if (!isHave) {
        set(chatsDbRef, {
          id,
          name,
          users: [fromUserId, toUserId],
        });
      }
    });
  });
};

export const deleteChatFb = (id) => (dispatch) => {
  set(ref(db, `chats/${id}`), {});
  set(ref(db, `messages/${id}`), {});

  dispatch(deleteChat(id));
  dispatch(initMessages());
};
