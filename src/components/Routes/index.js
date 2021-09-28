import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Chats from "../Chats";
import News from "../News";
import Navbar from "../Navbar";
import { useState } from "react";
import { Registration } from "../Registration";

export default function Routes() {
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    console.log("login");
    setAuthed(true);
  };

  const handleSignUp = () => {
    console.log("signup");
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/news">
          <News />
        </Route>

        <Route path="/login">
          <Registration onLogin={handleLogin} />
        </Route>

        <Route path="/signup">
          <Registration onSignUp={handleSignUp} />
        </Route>

        <Route exact path="/home">
          <Home authed={authed} onLogout={handleLogout} />
        </Route>

        {authed ? (
          <Route path="/profile">
            <Profile />
          </Route>
        ) : (
          <Redirect to="/home" />
        )}

        {authed ? (
          <Route path="/chats/:chatId?">
            <Chats />
          </Route>
        ) : (
          <Redirect to="/home" />
        )}

        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
