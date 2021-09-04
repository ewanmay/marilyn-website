import React from "react";
import { Switch, Route } from "react-router";

function Message() {
  return (
    <div className="message flex center column">
      <h4 className="message-title">Count on Marilyn.</h4>
      <div className="flex left message-text">
        Marilyn has been serving the families of NE Calgary as the public school
        board trustee for Wards 5 & 10 since 2017. As Vice-Chair, and now as
        Board Chair, she has provided leadership, passion and integrity as she
        brought forward the education issues that matter most to NE Calgary.
        Having lived and volunteered in NE Calgary for most of her life, Marilyn
        understands the unique challenges facing families and schools in Wards 5
        & 10. There is no one better suited to be the voice of NE Calgary in the
        public school system than Marilyn!
      </div>
    </div>
  );
}

export default Message;
