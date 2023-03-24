import React from "react";
import { NavLink } from "react-router-dom";

import style from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink
        to={"/dialogs/" + props.number}
        className={({ isActive }) => (isActive ? style.activeLink : undefined)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
