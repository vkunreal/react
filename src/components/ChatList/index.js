import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, makeStyles, Button } from "@material-ui/core";
import "./styles.css";

export default function ChatList({ chatsList, chatId }) {
  const [chats, setChats] = useState([...chatsList]);

  const useStyles = makeStyles({
    list: {
      marginTop: "2px",
      marginRight: "10px",
    },
  });

  const classes = useStyles();

  return (
    <List className={classes.list}>
      {chats.map((elem, index) => {
        let isInd;

        if (chatId) {
          isInd = index + 1 === parseInt(chatId.match(/\d+/)) ? true : false;
        } else {
          isInd = false;
        }

        return (
          <Link
            to={`/chats/${elem.id}`}
            className="chats-a"
            key={elem.id}
            selected={isInd}
          >
            <ListItem button selected={isInd}>
              {elem.name}
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
