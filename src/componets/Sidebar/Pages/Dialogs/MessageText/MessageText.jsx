import React from "react";
// import { NavLink } from "react-router-dom";

import style from "./MessageText.module.css";

const MessageText = (props) => {
  return <div className={style.message}>{props.massage}</div>;
};

export default MessageText;
