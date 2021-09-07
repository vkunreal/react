import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";

export default function ChatList() {
  const useStyles = makeStyles({
    list: {
      marginTop: "2px",
      marginRight: "10px",
    },
  });

  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem button>Chat</ListItem>
      <ListItem button>Chat</ListItem>
    </List>
  );
}
