import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Chats from "../Chats";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/chats/:chatId?">
          <Chats />
        </Route>

        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
