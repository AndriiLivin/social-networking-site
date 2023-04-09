import React from "react";
import style from "./Users.module.css";

const Users = (props) => {

  if (props.users.length === 0) {
 
    props.setUsers([
      {
        id: 0,
        fullName: "Andrii",
        status: "I am a teacher.",
        location: {
          country: "Ukraine",
          city: "Kyiv",
        },
        followed: true,
        photoUrl:
          "https://bipbap.ru/wp-content/uploads/2021/07/ae785830348d0d06a40e79f2219052ad-730x548.jpg",
      },
      {
        id: 1,
        fullName: "Victorya",
        status: "I am a bookceaper.",
        location: {
          country: "Ukraine",
          city: "Odessa",
        },
        followed: false,
        photoUrl:
          "https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg",
      },
      {
        id: 2,
        fullName: "Petro",
        status: "I no now.",
        location: {
          countre: "Turque",
          city: "Stambul",
        },
        followed: true,
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511851_21.jpg",
      },
      {
        id: 3,
        fullName: "Helen",
        status: "I am a girl.",
        location: {
          country: "Germany",
          city: "Drezden",
        },
        followed: false,
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
      },
    ]);
  }

  return (
    <div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img className={style.photo} src={u.photoUrl} alt="" />
              </div>
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
                <div>{u.fullName}</div>
                <div>{u.status} </div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
