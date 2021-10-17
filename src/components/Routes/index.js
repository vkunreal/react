import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../Home";
import Profile from "../Profile";
import Chats from "../Chats";
import News from "../News";
import Navbar from "../Navbar";
import { Registration } from "../Registration";
import { auth, db, login, logout, signUp } from "../../services/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { child, get, ref, set } from "@firebase/database";
import { changeId, changeName } from "../../store/profile/actions";

export default function Routes() {
  const [authed, setAuthed] = useState(false);
  const dispatch = useDispatch();

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
      const dbRef = ref(db);

      get(child(dbRef, "profile")).then((snapshot) => {
        if (snapshot.exists()) {
          let id;
          let name;

          Object.values(snapshot.val()).forEach((item) => {
            if (item.email === email) {
              id = item.id;
              name = item.username;
            }
          });

          dispatch(changeId(id));
          dispatch(changeName(name));
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async (email, name, pass) => {
    const id = Date.now();
    try {
      await signUp(email, pass);
      set(ref(db, `profile/${id}`), {
        username: name,
        email: email,
        id,
      });
      dispatch(changeId(id));
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
