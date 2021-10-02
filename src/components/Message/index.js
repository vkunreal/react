import "./styles.scss";

export const Message = ({ author, text, messClass }) => {
  const className = `messageContainer ${messClass}`;

  return (
    <div className={className}>
      <div>{author}:</div>
      <div className="message">{text}</div>
    </div>
  );
};
