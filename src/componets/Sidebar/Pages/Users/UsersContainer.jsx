// import React from "react";
// import Users from "./Users";
import Users from "./UsersClassComponent";
import { connect } from "react-redux";
import {
  followACreator,
  setUsersACreator,
  unfollowACreator,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from "../../../../redux/usersReducer";

// это функция принимает весь state целиком и возвращает только нужные данные
const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.usersPage.users,

    // добавляем информацию о страницах
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  
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
  };
};

// connect(mapStateToProps, mapDispatchToProps)(Users);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
