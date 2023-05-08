import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <header className={style.header}>
      <img className={style.imageLogo}
        alt=""
        src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
      />

      <div className={style.loginBlock}>
        <img
          className={style.imageBlock}
          alt="*****"
          src={props.userLogData.avatar ? props.userLogData.avatar : "#"}
        />

        <div className={style.textBlock}>
          <div>
            {props.isAuth ? (
              "Имя - " + props.login
            ) : (
                // страничуки логина пока нет, поэтому и ветка тупиковая
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </div>

          <div>{props.isAuth ? "myId - " + props.id : ""}</div>

          <div>{props.isAuth ? "Email - " + props.email : ""}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
