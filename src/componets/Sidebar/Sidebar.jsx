import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
// console.log(style);

const Sidebar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/Profile"
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/Dialogs"
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/News"
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/Music"
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/Users"
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/Settings"
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
