import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // let postsData = [
  //   {
  //     id: 0,
  //     message: "Привет. Ты как поживаешь?",
  //     likesCount: 15,
  //     image:
  //       "https://bipbap.ru/wp-content/uploads/2021/07/ae785830348d0d06a40e79f2219052ad-730x548.jpg",
  //   },
  //   {
  //     id: 1,
  //     message: "It's my first post",
  //     likesCount: 135,
  //     image: "https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg",
  //   },
  //   {
  //     id: 2,
  //     message: "It's post",
  //     likesCount: 55,
  //     image: "https://klike.net/uploads/posts/2019-03/1551511851_21.jpg",
  //   },
  //   {
  //     id: 3,
  //     message: "It's my Life.",
  //     likesCount: 2135,
  //     image: "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
  //   },
  // ];

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
    // let textPost = newPostElement.current.value;

    // Вызывыем колбэк функцию с введенными данными

    // props.addPost(textPost);
     props.addPost();
    // обнуляем строку ввода
    // newPostElement.current.value = "";
    // передаем пустую строку
    // props.updateNewPostText("");
    // alert(textPost);
  }

  function onPostChange() {
    props.updateNewPostText(newPostElement.current.value);
    // console.log(newPostElement.current.value);
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
              // value="фиксированное значение"
            />
          </section>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
        {/* <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
          image={postsData[0].image}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
          image={postsData[1].image}
        />
        <Post
          message={postsData[2].message}
          likesCount={postsData[2].likesCount}
          image={postsData[2].image}
        />
        <Post
          message={postsData[3].message}
          likesCount={postsData[3].likesCount}
          image={postsData[3].image}
        /> */}
      </div>
    </main>
  );
};

export default MyPosts;
