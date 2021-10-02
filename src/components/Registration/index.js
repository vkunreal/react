import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button } from "@material-ui/core";
import "./styles.scss";

export const Registration = ({ onLogin, onSignUp }) => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();

  const loginChange = (e) => {
    setLogin(e.target.value);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const handleClick = () => {
    setLogin("");
    setName("");
    setPass("");

    if (onLogin) {
      onLogin(login, pass).then(() => {
        history.push("/profile");
      });
    } else {
      onSignUp(login, name, pass).then(() => {
        history.push("/profile");
      });
    }
  };

  return (
    <div className="loginCont">
      <h2>{onLogin ? "Login:" : "Sign Up:"}</h2>

      <div>
        <form className="loginForm">
          <TextField
            type="text"
            placeholder="Login"
            value={login}
            onChange={loginChange}
          />

          {onSignUp && (
            <TextField
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameChange}
            />
          )}

          <TextField
            type="password"
            placeholder="Password"
            value={pass}
            onChange={passChange}
          />

          <Button variant="outlined" onClick={handleClick}>
            {onLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};
