export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

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
 