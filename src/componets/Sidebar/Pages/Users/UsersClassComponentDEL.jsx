import React from "react";
import style from "./UsersAPIComponent.module.css";
// import axios, { Axios } from "axios";
import axios from "axios";
import userFotoBlank from "../Users/userFotoBlank.jpg";

// т.к. в mapStateToProps = (state) => {
// мы поместили users return { users: state.usersPage.users, }
//  то в props будут находиться пользователи props.users

class UsersAPIComponent extends React.Component {
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
        let data = [];

        for (let i = 0; i < this.props.pageSize; i++) {
          // data.push(response.data[i]);
          data = [...data, response.data[i]];
        }
        // props становится свойством объекта, поэтому нужно писать this.props

        // this.props.setUsers(response.data);
        this.props.setUsers(data);

        this.props.setTotalUsersCount(response.data.length);
      });
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    //   )
    //   .then((response) => {
    //     this.props.setUsers(response.data.items);
    //     this.props.setTotalUsersCount(response.data.totalCount);
    //   });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    //   )
    //   .then((response) => {
    //     this.props.setUsers(response.data.items);
    //   });
    axios
      .get(`https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases`)
      .then((response) => {
        let data = [];
        const iMax =
          this.props.pageSize * pageNumber < this.props.totalUsersCount
            ? this.props.pageSize * pageNumber
            : this.props.totalUsersCount;

        for (let i = this.props.pageSize * (pageNumber - 1); i < iMax; i++) {
          data.push(response.data[i]);
        }
        // this.props.setUsers(response.data.items);
        this.props.setUsers(data);
      });
  };

  // props в рендер не приходят
  // render обязательный метод классовой компоненты
  // он возвращает jsx разметку.
  // сначала вызывается render = (), а потом только componentDidMount()
  render = () => {
    // считаем количество кнопок в пагинации
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    // создаем массив страниц для отображения
    const pages = [];
    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
    }

    return (
      <div>
        <div className={style.pagination}>
          {pages.map((p) => {
            return (
              <span
                key={p}
                className={
                  this.props.currentPage === p ? style.selectedPage : ""
                  // } onClick={()=>{this.props.setCurrentPage(p)}}
                }
                onClick={(event) => {
                  this.onPageChanged(p);
                }}
              >
                {".." + p + ".."}
              </span>
            );
          })}
        </div>
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

export default UsersAPIComponent;
