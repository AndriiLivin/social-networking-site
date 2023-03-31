import React from "react";

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

  function onAddPost() {
    if (newPostElement.current.value === "") {
      props.upDateNewPostText("Пустой пост.");
    }
          props.addPost();
  }

  function onPostChange() {
    let text = newPostElement.current.value;
     props.upDateNewPostText(text);
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
          <button onClick={onAddPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </main>
  );
};

export default MyPosts;
