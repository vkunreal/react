import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { deleteChatFb } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import "./styles.scss";

const ChatList = ({ chatId }) => {
  const chats = useSelector(selectChats);
  const userId = useSelector((state) => state.profile.id);
  const dispatch = useDispatch();

  const handleDeleteChat = (e) => {
    const id = e.target.getAttribute("ind");
    dispatch(deleteChatFb(id));
  };

  const names = chats.map((elem) => elem.name);

  const isHaveUser = (users) => {
    let isHave = false;

    Object.keys(users).forEach((item) => {
      if (users[item] === userId) isHave = true;
    });

    return isHave;
  };

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

        if (isHaveUser(elem.users)) {
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
        }
      })}
    </List>
  );
};

export default ChatList;
