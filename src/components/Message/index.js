import "./styles.scss";

export function Message({ author, text }) {
  return (
    <div className="messageContainer">
      <div>{author}:</div>
      <div className="message">{text}</div>
    </div>
  );
}
