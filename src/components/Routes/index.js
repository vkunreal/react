import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";
import Chats from "../Chats";
import News from "../News";
import Navbar from "../Navbar";
import { useState } from "react";
import { Registration } from "../Registration";
import { auth, login, logout, signUp } from "../../services/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";

export default function Routes() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (email, pass) => {
    try {
      await login(email, pass);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async (email, pass) => {
    try {
      await signUp(email, pass);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
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
