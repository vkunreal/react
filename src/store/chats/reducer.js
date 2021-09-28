import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./actions";

// const initialState = [
//   { name: "Chat 1", id: "chat-1" },
//   { name: "Chat 2", id: "chat-2" },
//   { name: "Chat 3", id: "chat-3" },
// ];

const initialState = {
  chats: [],
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        // {
        //   name: payload.name,
        //   id: `${payload.id}`,
        // },
        chats: [
          ...state.chats,
          {
            id: `chats-${Date.now()}`,
            name: payload,
          },
        ],
      };
    }

    case DELETE_CHAT: {
      const newChats = state.chats.filter(({ id }) => id !== payload);

      return {
        ...state,
        chats: newChats,
      };
    }

    case SET_CHATS: {
      return {
        ...state,
        chats: payload,
      };
    }

    default:
      return state;
  }
};
