import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { deleteChat } from "../../store/chats/actions";
import "./styles.scss";
import { selectChats } from "../../store/chats/selectors";

export default function ChatList({ chatId }) {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeleteChat = (e) => {
    const id = e.target.getAttribute("ind");
    dispatch(deleteChat(id));

    if (chatId === id) {
      const url =
        chats[chats.indexOf(chats.filter((el) => el.id === id)[0]) - 1].id;
      history.push(`/chats/${url}`);
    } else {
      return;
    }
  };

  const names = chats.map((elem) => {
    return elem.name;
  });

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
          isInd = chatId === elem.id;
        } else {
          isInd = false;
        }

        return (
          <Link
            to={`/chats/${elem.id}`}
            key={elem.id}
            className="chats-a"
            selected={isInd}
          >
            <ListItem button selected={isInd} className="listItem">
              <div className="chatItem">
                {names[index]}
                <span ind={elem.id} onClick={handleDeleteChat}>
                  &#10006;
                </span>
              </div>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
