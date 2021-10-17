import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reduces";
import { profileReducer } from "./profile/reducer";
import { ArticlesReducer } from "./articles/reducer";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  blacklist: ["messages"],
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  articles: ArticlesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
