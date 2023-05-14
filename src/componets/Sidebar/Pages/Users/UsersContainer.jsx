import React from "react";

import { connect } from "react-redux";
import {
  follow_AC,
  unfollow,

  toggleFollowingInProgress,
  getUsersThunkCreator,
} from "../../../../redux/usersReducer";

import UsersFunctionComponent from "./UsersFunctionComponent";
import Preloader from "../../../Common/Preloader/preloader";

// Называем API т.к. связывает между собой container и UsersFunctionComponent
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

const UsersContainer = connect(mapStateToProps, {

  follow: follow_AC,

  unfollow,

  toggleFollowingInProgress,
  
  // создаем колбэк getUsers, который внутри себя диспачит санку getUsersThunkCreator
  getUsers: getUsersThunkCreator,
})(UsersAPIComponent);

export default UsersContainer;
