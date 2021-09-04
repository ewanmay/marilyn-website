import React from "react";
import { Switch, Route } from "react-router";
import "./About.css";

interface ParagraphProps {
  title: string;
  body: string;
  direction: string;
}

function Paragraph({ title, body, direction }: ParagraphProps) {
  return (
    <div className={`paragraph ${direction}`}>
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  );
}

export default Paragraph;
