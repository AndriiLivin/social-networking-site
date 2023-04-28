import React from "react";
import style from "./Users.module.css";
// import axios, { Axios } from "axios";
import axios from "axios";
import userFotoBlank from "../Users/userFotoBlank.jpg";

// т.к. в mapStateToProps = (state) => {
// мы поместили users return { users: state.usersPage.users, }
//  то в props будут находиться пользователи props.users

class Users extends React.Component {
  // наш контсруктор вызывается только один раз при создании объекта
  // поэтому в конструкторе и загружаем список пользователей
  // это происходит один раз и не требует проверки на нулевую длину
  // и не нужна пнопка загрузки пользователей

  constructor(props) {
    super(props);

    // alert("создан новый объект");

    // if (this.props.users.length === 0) {
    axios
      .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
      .then((response) => {
        this.props.setUsers(response.data);
      });

    // axios
    //   .get(" https://social-network.samuraijs.com/api/1.0/users")
    //   .then((response) => {
    //     props.setUsers(response.data.items);
    //   });
    // }
  }

  getUsers = () => {
    // if (this.props.users.length === 0) {
    //   axios
    //     .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
    //     .then((response) => {
    //       this.props.setUsers(response.data);
    //     });
    //   // axios
    //   //   .get(" https://social-network.samuraijs.com/api/1.0/users")
    //   //   .then((response) => {
    //   //     props.setUsers(response.data.items);
    //   //   });
    // }
  };

  render = () => {
    return (
      <div>
        {/* <button onClick={this.getUsers}>Get users</button> */}
        <div>
          {this.props.users.map((u) => (
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
                        this.props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
}

// const Users = (props) => {

//   let getUsers = () => {
//     if (props.users.length === 0) {
//       axios
//         .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
//         .then((response) => {
//           props.setUsers(response.data);
//         });

//       // axios
//       //   .get(" https://social-network.samuraijs.com/api/1.0/users")
//       //   .then((response) => {
//       //     props.setUsers(response.data.items);
//       //   });
//     }
//   };

//   return (<div>

//     <button onClick={getUsers} >Get users</button>

//       <div>
//         {props.users.map((u) => (
//           // всегда нужен  key={u.id}
//           <div key={u.id}>
//             <span>
//               <div>
//                 <img
//                   className={style.photo}
//                   src={
//                     u.photosSmall != null
//                       ? u.photosSmall
//                       : // : "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg"
//                         // или
//                         userFotoBlank
//                   }
//                   alt=""
//                 />
//               </div>
//               {/* выводим на кнопку нужное состояние */}
//               <div>
//                 {u.followed ? (
//                   <button
//                     onClick={() => {
//                       props.unfollow(u.id);
//                     }}
//                   >
//                     Unfollow
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       props.follow(u.id);
//                     }}
//                   >
//                     Follow
//                   </button>
//                 )}
//               </div>
//             </span>
//             <span>
//               <span>
//                 <div>{u.name}</div>
//                 <div>{u.status} </div>
//               </span>
//               <span>
//                 {/* <div>{"u.location.country"}</div>
//                 <div>{"u.location.city"}</div> */}
//                 <div>{u.country}</div>
//                 <div>{u.city}</div>
//               </span>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Users;
