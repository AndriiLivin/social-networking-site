import React from "react";

import style from "./ProfileInfo.module.css";
import Preloader from "../../../../Common/Preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props.profile);
  return (
    <section>
      <div className={style.profile}>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0HtBAPtxyscUfU26bE5hXknFbOm2I6d-rw&usqp=CAU"
        ></img>
      </div>
      <div className={style.ava}>
        <img src={props.profile.photosLarge} alt="" width="300px" />
        AVATA + Description
      </div>
    </section>
  );
};

export default ProfileInfo;
