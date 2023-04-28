import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img alt="" src={props.image}></img>
      {props.message}
      <div className="">
        <span>Likes </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
