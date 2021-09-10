import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, makeStyles, Button } from "@material-ui/core";
import "./styles.css";

export default function ChatList({ chatsList }) {
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
      {chats.map((elem) => {
        return (
          <Link to={`/chats/${elem.id}`} className="chats-a" key={elem.id}>
            <ListItem button>{elem.name}</ListItem>
          </Link>
        );
      })}
    </List>
  );
}
