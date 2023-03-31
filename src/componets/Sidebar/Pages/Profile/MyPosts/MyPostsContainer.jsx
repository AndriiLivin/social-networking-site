import React from "react";
import {
  addPostActionCreator,
  upDateNewPostActionCreator,
} from "../../../../../redux/profileReducer";

import MyPosts from "./MyPosts";

// может быть не тупой
// она удовлетворяет нужды презентационной компоненты
// это обертка
const MyPostsContainer = (props) => {
  let state = props.store.getState();

  function addPost() {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  }

  function onPostChange(text) {
    let action = upDateNewPostActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts
      upDateNewPostText={onPostChange}
      addPost={addPost}
      postsData={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
