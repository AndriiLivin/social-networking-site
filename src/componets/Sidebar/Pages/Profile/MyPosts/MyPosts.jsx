import React from "react";
import { addPostActionCreator, upDateNewPostActionCreator } from "../../../../../redux/profileReducer";
// import {
//   addPostActionCreator,
//   upDateNewPostActionCreator,
// } from "../../../../../redux/state";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => {
    return (
      <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
        image={p.image}
      />
    );
  });

  let newPostElement = React.createRef();

  function addPost() {
      props.dispatch(addPostActionCreator());
  }

  function onPostChange() {
     props.dispatch(upDateNewPostActionCreator(newPostElement.current.value));
  }

  return (
    <main>
      <div className={style.postsBlock}>
        <h3>My posts</h3>
        <div>
          <section>
            <textarea
              ref={newPostElement}
              onChange={onPostChange}
              value={props.newPostText}
            />
          </section>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </main>
  );
};

export default MyPosts;
