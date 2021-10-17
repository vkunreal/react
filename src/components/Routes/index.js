import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Chats from "../Chats";
import News from "../News";
import Navbar from "../Navbar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />

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

        <Route path="/news">
          <News />
        </Route>

        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
