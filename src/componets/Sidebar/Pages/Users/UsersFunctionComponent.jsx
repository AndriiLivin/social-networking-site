import React from "react";
import style from "./UsersFunctionComponent.module.css";
// import axios, { Axios } from "axios";
// import axios from "axios";
import userFotoBlank from "../Users/userFotoBlank.jpg";

// определяем чистую функциональную компоненту
// получает props и выдает jsx
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
                <img
                  className={style.photo}
                  src={
                    u.photosSmall != null
                      ? u.photosSmall
                      : // : "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg"
                        // или
                        userFotoBlank
                  }
                  alt=""
                />
              </div>
              {/* выводим на кнопку нужное состояние */}
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
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
