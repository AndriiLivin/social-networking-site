import React from "react";
// import Users from "./Users";
// import UsersAPIComponent from "./UsersAPIComponent";
import { connect } from "react-redux";
import {
  followACreator,
  setUsersACreator,
  unfollowACreator,
  setCurrentPageAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
} from "../../../../redux/usersReducer";
import axios from "axios";
import UsersFunctionComponent from "./UsersFunctionComponent";
import Preloader from "../../../Common/Preloader/preloader";



// Называем API т.к. связывает между собой container и UsersFunctionComponent
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // при запросе включаем крутилку
    this.props.toggleIsFetching(true);

    this.props.setCurrentPage(1);
    axios
      .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases")
      .then((response) => {
        // когда приходит ответ выключаем крутилку
        this.props.toggleIsFetching(false);

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
    // при запросе включаем крутилку
    this.props.toggleIsFetching(true);
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
        // когда приходит ответ выключаем крутилку
        this.props.toggleIsFetching(false);
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
    return (
      // заглушка
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : null}
        <UsersFunctionComponent
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  };
}

// это функция принимает весь state целиком и возвращает только нужные данные
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,

    // добавляем информацию о страницах
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// для пердачи функци-колбэков
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      // диспатчим результат работы экшенКриэйтора
      dispatch(followACreator(userId));
    },

    unfollow: (userId) => {
      // диспатчим результат работы экшенКриэйтора
      dispatch(unfollowACreator(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersACreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

// connect(mapStateToProps, mapDispatchToProps)(Users);

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
