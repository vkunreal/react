import React from "react";
import "./styles.scss";

export const Message = React.memo(({ author, text, messClass }) => {
  const className = `messageContainer ${messClass}`;

  return (
    <div className={className}>
      <div>{author}:</div>
      <div className="message">{text}</div>
    </div>
  );
});
