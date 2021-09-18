import { useRef, useState, useEffect } from "react";
import { createTheme, ThemeProvider, Fab, TextField } from "@material-ui/core";
import "./styles.scss";

export default function Form({ onClick, label, text }) {
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
    <ThemeProvider theme={theme}>
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
              borderColor: theme.palette.secondary.main,
            }}
          >
            {text}
          </Fab>
        </div>
      </form>
    </ThemeProvider>
  );
}
