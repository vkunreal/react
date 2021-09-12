import { ADD_CHAT } from "./actions";

const initialState = {
  "chat-1": [
    { author: "You", text: "Hello!", id: "cht1-ms1" },
    { author: "You", text: "How are you?", id: "cht1-ms2" },
  ],
  "chat-2": [
    { author: "You", text: "Yeap!", id: "cht2-ms1" },
    { author: "You", text: "Nice weather today", id: "cht2-ms2" },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.name]: action.body,
      };
    }
  }
};
