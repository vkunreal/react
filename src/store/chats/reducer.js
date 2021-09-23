import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [
  { name: "Chat 1", id: "chat-1" },
  { name: "Chat 2", id: "chat-2" },
  { name: "Chat 3", id: "chat-3" },
];

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return [
        ...state,
        {
          name: payload.name,
          id: `${payload.id}`,
        },
      ];
    }

    case DELETE_CHAT: {
      const newChats = state.filter(({ id }) => id !== payload);

      return [
        ...newChats,
      ];
    }

    default:
      return state;
  }
};
