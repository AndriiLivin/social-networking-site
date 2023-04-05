// import React from "react";
import {
  addPostActionCreator,
  upDateNewPostActionCreator,
} from "../../../../../redux/profileReducer";

import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    upDateNewPostText: (text) => {
      let action = upDateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
