import { useRef, useState, useEffect } from "react";
import { Fab, TextField } from "@material-ui/core";
import "./styles.scss";

const Form = ({ onClick, label, text }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const changeMessage = (e) => {
    setMessage((prevValue) => (prevValue = e.target.value));
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    onClick(message);
    setMessage("");
    inputRef.current?.focus();
  };

  const isDisabled = () => {
    return !message.trim();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="messageForm" onSubmit={sendMessage}>
      <div>
        <TextField
          value={message}
          onChange={changeMessage}
          label={label}
          inputRef={inputRef}
        />
      </div>
      <div>
        <Fab
          color="secondary"
          onClick={sendMessage}
          disabled={isDisabled()}
          style={{
            borderColor: "#0098FF",
          }}
        >
          {text}
        </Fab>
      </div>
    </form>
  );
};

export default Form;
