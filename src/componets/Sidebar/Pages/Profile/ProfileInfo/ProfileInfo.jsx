import React from "react";


import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <section>
      <div className={style.profile}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0HtBAPtxyscUfU26bE5hXknFbOm2I6d-rw&usqp=CAU"></img>
      </div>
      <div className={style.ava}>AVATA + Description </div>
  
    </section>
  );
};

export default ProfileInfo;
