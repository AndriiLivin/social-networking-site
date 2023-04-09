// import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followACreator,
  setUsersACreator,
  unfollowACreator,
} from "../../../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    newKey:state.usersPage.newKey,
  };
};

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
  };
};

// connect(mapStateToProps, mapDispatchToProps)(Users);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
