import { Button } from "@material-ui/core";
import { useState } from "react";

export const Registration = ({ onLogin, onSignUp }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const loginChange = (e) => {
    setLogin(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const handleClick = () => {
    setLogin("");
    setPass("");

    if (onLogin) {
      onLogin(login, pass);
    } else {
      onSignUp(login, pass);
    }
  };

  return (
    <div>
      <h2>{onLogin ? "Login:" : "Sign Up:"}</h2>

      <div>
        <form>
          <input
            type="text"
            placeholder={onLogin ? "Login" : "Sign Up"}
            value={login}
            onChange={loginChange}
          />

          <input
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
