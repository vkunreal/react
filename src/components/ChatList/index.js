import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, makeStyles } from "@material-ui/core";
import "./styles.css";

export default function ChatList({ chatsList, chatId }) {
  const [chats] = useState([...Object.keys(chatsList)]);

  let names = [];

  for (const key of Object.keys(chatsList)) {
    names.push(chatsList[key].name);
  }

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
            to={`/chats/${elem}`}
            key={elem}
            className="chats-a"
            selected={isInd}
          >
            <ListItem button selected={isInd}>
              {names[index]}
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
