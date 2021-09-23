import { ADD_MESSAGE, ADD_CHAT_WITH_MESSAGES } from "./actions";

const initialState = {
  "chat-1": [
    { author: "You", text: "Hello!", id: "cht1-ms1" },
    { author: "You", text: "How are you?", id: "cht1-ms2" },
  ],
  "chat-2": [
    { author: "You", text: "Yeap!", id: "cht2-ms1" },
    { author: "You", text: "Nice weather today", id: "cht2-ms2" },
  ],
  "chat-3": [
    { author: "You", text: "Hey!", id: "cht2-ms1" },
    { author: "You", text: "Nice day!", id: "cht2-ms2" },
  ],
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [
          ...state[payload.chatId],
          {
            id: `msg-${Date.now()}`,
            author: payload.author,
            text: payload.text,
          },
        ],
      };

    case ADD_CHAT_WITH_MESSAGES:
      return {
        ...state,
        [payload.id]: [
          { author: "Bot", text: "Test!", id: `mes-${payload.id}` },
        ],
      };

    default:
      return state;
  }
};
