export const selectMessages = (state) => state.messages;
export const selectAuthor = (chatId) => (state) => {
  const messages = state.messages;
  return messages[chatId][messages[chatId].length - 1].author;
};
