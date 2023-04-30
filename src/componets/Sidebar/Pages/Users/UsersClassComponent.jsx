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
  // и не нужна кнопка загрузки пользователей
  // при повторной отрисовке компоненты используется уже созданый объект

  // если конструктор не зоздает свойств для этой компоненты
  // то его можно не писать
  // в нашем случае нужно писать т.к. есть axios
  // constructor(props) {
  //   super(props);

  //   // axios
  //   //   .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
  //   //   .then((response) => {
  //   //     // props становится свойством объекта, поэтому нужно писать this.props
  //   //     this.props.setUsers(response.data);
  //   //   });
  // }

  // переносим запрос в componentDidMount()
  // при этом можно отказаться от конструктора т.к. он только передает props,
  // а это происходит по умолчанию
  componentDidMount() {
    axios
      .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
      .then((response) => {
        // props становится свойством объекта, поэтому нужно писать this.props
        this.props.setUsers(response.data);
      });
  }

  // props в рендер не приходят
  // render обязательный метод классовой компоненты
  // он возвращает jsx разметку.
  render = () => {
    return (
      <div>
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

export default Users;
