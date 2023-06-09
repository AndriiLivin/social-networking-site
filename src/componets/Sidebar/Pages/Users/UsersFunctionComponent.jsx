import React from "react";
import style from "./UsersFunctionComponent.module.css";

import userFotoBlank from "../Users/userFotoBlank.jpg";
import { NavLink } from "react-router-dom";

let UsersFunctionComponent = (props) => {
  // считаем количество кнопок в пагинации
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // создаем массив страниц для отображения
  const pages = [];
  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  // возвращаем jsx разметку
  return (
    <div>
      <div className={style.pagination}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={
                props.currentPage === p ? style.selectedPage : ""
                // } onClick={()=>{this.props.setCurrentPage(p)}}
              }
              onClick={(event) => {
                props.onPageChanged(p);
              }}
            >
              {".." + p + ".."}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          // всегда нужен  key={u.id}
          <div key={u.id}>
            <span>
              <div>
                {/* <NavLink> по сути тег <a></a> и там добавлена инкапсулировваная логика */}
                {/* Если после  /Profile стоит любая дичь без пробелов, 
                то /Profile подгружается все равно*/}
                <NavLink to={"/Profile/" + u.id}>
                  <img
                    className={style.photo}
                    src={u.avatar != null ? u.avatar : userFotoBlank}
                    alt=""
                  />
                </NavLink>
              </div>
              {/* выводим на кнопку нужное состояние */}
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow{" "}
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status} </div>
              </span>
              <span>
                {/* <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div> */}
                <div>{u.country}</div>
                <div>{u.city}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersFunctionComponent;
