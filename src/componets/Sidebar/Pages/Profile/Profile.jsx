import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo />
      <MyPosts
        postsData={props.postsData.posts}
        newPostText={props.postsData.newPostText}
        dispatch={props.dispatch}
        // addPost={props.addPost}
        // updateNewPostText={props.updateNewPostText}
      />
    </section>
  );
};

export default Profile;
