export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_CHAT_WITH_MESSAGES = "MESSAGES:ADD_CHAT_WITH_MESSAGES";

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
