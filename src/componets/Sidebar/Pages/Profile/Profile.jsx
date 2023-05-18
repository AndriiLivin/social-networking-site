import React from "react";

// import style from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
 

  return (
    <section>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
