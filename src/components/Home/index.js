import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chats">Chats</Link>
      </nav>
    </div>
  );
}
