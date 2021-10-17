import { Link } from "react-router-dom";
import "./styles.scss";

export default function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/chats">Chats</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
