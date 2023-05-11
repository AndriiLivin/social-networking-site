import React from "react";
import style from "./UsersFunctionComponent.module.css";
// import axios, { Axios } from "axios";
// import axios from "axios";
import userFotoBlank from "../Users/userFotoBlank.jpg";
import { NavLink } from "react-router-dom";
// import axios from "axios";
import { usersAPI } from "../../../../Api/api";
import { toggleFollowingInProgress } from "../../../../redux/usersReducer";

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
                      // начинается асинхронный запрос
                      props.toggleFollowingInProgress(true, u.id);
                      // axios
                      // .delete(
                      //   ` https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/${u.id}`,
                      //   {
                      //     withCredentials: true,
                      //     headers: {
                      //       "API-KEY": "da348022-003c-4c1b-9e99-dc746465860c",
                      //     },
                      //   }
                      // )
                      // .then((response) => {
                      //   if (response.status === 200) {
                      //     props.unfollow(u.id);
                      //   }
                      // });

                      //   .put(
                      //     ` https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/${u.id}`,
                      //     { followed: false }
                      // )
                      usersAPI.setFollow(u.id, false).then((response) => {
                        console.log(response);
                        if (response.status === 200) {
                          props.unfollow(u.id);
                        }
                        // заканчивается асинхронный запрос
                        props.toggleFollowingInProgress(false, u.id);
                      });
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
                      // начинается асинхронный запрос
                      props.toggleFollowingInProgress(true, u.id);
                      // axios
                      // .post(
                      //   ` https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/${u.id}`,
                      //   {},
                      //   {
                      //     withCredentials: true,
                      //     headers: {
                      //       "API-KEY": "da348022-003c-4c1b-9e99-dc746465860c",
                      //     },
                      //   }
                      // )

                      //   .put(
                      //     ` https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/${u.id}`,
                      //     { followed: true }
                      // )
                      usersAPI.setFollow(u.id, true).then((response) => {
                        if (response.status === 200) {
                          props.follow(u.id);
                        }
                        // заканчивается асинхронный запрос
                        props.toggleFollowingInProgress(false, u.id);
                      });
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
