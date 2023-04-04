import React from "react";
import {
  addPostActionCreator,
  upDateNewPostActionCreator,
} from "../../../../../redux/profileReducer";

import MyPosts from "./MyPosts";
// import StoreContext from "../../../../../StoreContext";
import { connect } from "react-redux";

// может быть не тупой
// она удовлетворяет нужды презентационной компоненты
// это обертка
// const MyPostsContainer = (props) => {
//   // let state = props.store.getState();

//   // function addPost() {
//   //   let action = addPostActionCreator();
//   //   props.store.dispatch(action);
//   // }

//   // function onPostChange(text) {
//   //   let action = upDateNewPostActionCreator(text);
//   //   props.store.dispatch(action);
//   // }

//   return (
//     // оборачиваем презентационную компоненту тегом
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         function addPost() {
//           let action = addPostActionCreator();
//           store.dispatch(action);
//         }

//         function onPostChange(text) {
//           let action = upDateNewPostActionCreator(text);
//           store.dispatch(action);
//         }

//         return (
//           <MyPosts
//             upDateNewPostText={onPostChange}
//             addPost={addPost}
//             postsData={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

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

      // dispatch(sendMessageActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
