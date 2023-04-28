import React from "react";
import style from "./Users.module.css";
// import axios, { Axios } from "axios";
import axios from "axios";
import userFotoBlank from "../Users/userFotoBlank.jpg";

// т.к. в mapStateToProps = (state) => {
// мы поместили users return { users: state.usersPage.users, }
//  то в props будут находиться пользователи props.users

const Users = (props) => {
  if (props.users.length === 0) {


    axios
      .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
      .then((response) => {
        props.setUsers(response.data);
      });
    // console.log(axios.get(" https://social-network.samuraijs.com/api/1.0/users"));

    // axios
    //   .get(" https://social-network.samuraijs.com/api/1.0/users")
    //   .then((response) => {
    //     props.setUsers(response.data.items);
    //   });

    //   props.setUsers([
    //     {
    //       id: 0,
    //       fullName: "Andrii",
    //       status: "I am a teacher.",
    //       location: {
    //         country: "Ukraine",
    //         city: "Kyiv",
    //       },
    //       followed: true,
    //       photoUrl:
    //         "https://bipbap.ru/wp-content/uploads/2021/07/ae785830348d0d06a40e79f2219052ad-730x548.jpg",
    //     },
    //     {
    //       id: 1,
    //       fullName: "Victorya",
    //       status: "I am a bookceaper.",
    //       location: {
    //         country: "Ukraine",
    //         city: "Odessa",
    //       },
    //       followed: false,
    //       photoUrl:
    //         "https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg",
    //     },
    //     {
    //       id: 2,
    //       fullName: "Petro",
    //       status: "I no now.",
    //       location: {
    //         countre: "Turque",
    //         city: "Stambul",
    //       },
    //       followed: true,
    //       photoUrl: "https://klike.net/uploads/posts/2019-03/1551511851_21.jpg",
    //     },
    //     {
    //       id: 3,
    //       fullName: "Helen",
    //       status: "I am a girl.",
    //       location: {
    //         country: "Germany",
    //         city: "Drezden",
    //       },
    //       followed: false,
    //       photoUrl: "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
    //     },
    //   ]);
  }

  return (
    <div>
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

export default Users;
