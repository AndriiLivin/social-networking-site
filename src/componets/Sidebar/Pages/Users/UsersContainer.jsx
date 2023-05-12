import React from "react";
// import Users from "./Users";
// import UsersAPIComponent from "./UsersAPIComponent";
import { connect } from "react-redux";
import {
  follow_AC,
  // setUsers,
  unfollow,
  // setCurrentPage,
  // setUsersTotalCount,
  // toggleIsFetching,
  toggleFollowingInProgress,
  getUsersThunkCreator,
} from "../../../../redux/usersReducer";
// import axios from "axios";
import UsersFunctionComponent from "./UsersFunctionComponent";
import Preloader from "../../../Common/Preloader/preloader";
// import { usersAPI } from "../../../../Api/api";

// Называем API т.к. связывает между собой container и UsersFunctionComponent
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // // при запросе включаем крутилку
    // this.props.toggleIsFetching(true);

    // this.props.setCurrentPage(1);

    // // axios
    // //   .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")

    // // getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((respData) => {
    //     // когда приходит ответ выключаем крутилку
    //     this.props.toggleIsFetching(false);

    //     let data = [];

    //     for (let i = 0; i < this.props.pageSize; i++) {
    //       // data.push(response.data[i]);
    //       data = [...data, respData[i]];
    //     }
    //     // props становится свойством объекта, поэтому нужно писать this.props

    //     // this.props.setUsers(response.data);
    //     this.props.setUsers(data);

    //     this.props.setUsersTotalCount(respData.length);
    //   });
    // // axios
    // //   .get(
    // //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    // //   )
    // //   .then((response) => {
    // //     this.props.setUsers(response.data.items);
    // //     this.props.setTotalUsersCount(response.data.totalCount);
    // //   });
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    // // при запросе включаем крутилку
    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(pageNumber);

    // // axios
    // //   .get(
    // //     `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    // //   )
    // //   .then((response) => {
    // //     this.props.setUsers(response.data.items);
    // //   });

    // usersAPI
    //   .getUsersAPI(pageNumber, this.props.pageSize)
    //   // axios
    //   //   .get(`https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases`)
    //   .then((respData) => {
    //     // когда приходит ответ выключаем крутилку
    //     this.props.toggleIsFetching(false);
    //     let data = [];
    //     const iMax =
    //       this.props.pageSize * pageNumber < this.props.totalUsersCount
    //         ? this.props.pageSize * pageNumber
    //         : this.props.totalUsersCount;

    //     for (let i = this.props.pageSize * (pageNumber - 1); i < iMax; i++) {
    //       data.push(respData[i]);
    //     }
    //     // this.props.setUsers(response.data.items);
    //     this.props.setUsers(data);
    //   });
  };

  // props в рендер не приходят
  // render обязательный метод классовой компоненты
  // он возвращает jsx разметку.
  // сначала вызывается render = (), а потом только componentDidMount()
  render = () => {
    return (
      // заглушка
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <UsersFunctionComponent
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  };
}

// это функция принимает весь state целиком и возвращает только нужные данные
const mapStateToProps = (state) => {
  return {
    //Возвращается объект
    users: state.usersPage.users,

    // добавляем информацию о страницах
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,

    followingInProgress: state.usersPage.followingInProgress,
  };
};

// для пердачи функци-колбэков
// const mapDispatchToProps = (dispatch) => {
//   return {
//     //Возвращается объект
//     follow: (userId) => {
//       // диспатчим результат работы экшенКриэйтора
//       dispatch(followACreator(userId));
//     },

//     unfollow: (userId) => {
//       // диспатчим результат работы экшенКриэйтора
//       dispatch(unfollowACreator(userId));
//     },

//     setUsers: (users) => {
//       dispatch(setUsersACreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

// connect(mapStateToProps, mapDispatchToProps)(Users);

// const UsersContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UsersAPIComponent);

// лайф-хак
// пытаемся заставить connect самостоятельно создать колбэки
// из экшн-криэйторов, без участияmapDispatchToProps
// для пердачи функци-колбэков

// connect(mapStateToProps, mapDispatchToProps)(Users);

const UsersContainer = connect(mapStateToProps, {
  // убираем AC для экшен-криэйторов
  // (в первом случае оставлено для понимания)
  // чтобы использовать синтаксическое свойство определения свойства в объекте
  // если имя свойства и имя внешней переменной совпадает, присваивается автоматически.
  follow: follow_AC,

  unfollow,

  // setUsers,

  // setCurrentPage,

  // setUsersTotalCount,

  // toggleIsFetching,

  toggleFollowingInProgress,
  // создаем колбэк getUsers, который внутри себя диспачит санку getUsersThunkCreator
  getUsers: getUsersThunkCreator,
})(UsersAPIComponent);

export default UsersContainer;
