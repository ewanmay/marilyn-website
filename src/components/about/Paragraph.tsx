import React from "react";

interface ParagraphProps {
  title: string;
  body: string;
  direction: string;
}

function Paragraph({ title, body, direction }: ParagraphProps) {
  return (
    <div className={`paragraph ${direction}`}>
      <span />
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  );
}

export default Paragraph;
