import React, { useRef, useState, useEffect } from "react";
import { createTheme, ThemeProvider, Fab, TextField } from "@material-ui/core";
import "./styles.css";

export default function Form(props) {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const theme = createTheme({
    pallete: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "$0098FF",
      },
    },
  });

  const changeMessage = (e) => {
    setMessage((prevValue) => (prevValue = e.target.value));
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    props.onClick(message);
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
    <ThemeProvider theme={theme}>
      <form className="messageForm" onSubmit={sendMessage}>
        <div>
          <TextField
            value={message}
            onChange={changeMessage}
            label="Сообщение"
            inputRef={inputRef}
          />
        </div>
        <div>
          <Fab
            color="secondary"
            onClick={sendMessage}
            disabled={isDisabled()}
            style={{
              borderColor: theme.palette.secondary.main,
            }}
          >
            Отправить
          </Fab>
        </div>
      </form>
    </ThemeProvider>
  );
}
