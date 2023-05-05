import React from "react";

import style from "./ProfileInfo.module.css";
import Preloader from "../../../../Common/Preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <section>
      <div className={style.profile}>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0HtBAPtxyscUfU26bE5hXknFbOm2I6d-rw&usqp=CAU"
        ></img>
      </div>
      <section className={style.description}>
        <div className={style.ava}>
          <img src={props.profile.avatar} alt="" width="100px" />
          <div className="">Моя аватарка</div>
        </div>

        <div className={style.text}>
          <div className={style.title_text}>Страна:</div>
          <div>{props.profile.country}</div>
          <br />
          <div className={style.title_text}>Город:</div>
          <div>{props.profile.city}</div>
        </div>
        <div className={style.text}>
          <div className={style.title_text}>Меня зовут:</div>
          <div>{props.profile.name}</div>
          <br />
          <div className={style.title_text}>Мой статус:</div>
          <div>{props.profile.status}</div>
        </div>

        <div className={style.foto}>
          <img src={props.profile.photosLarge} alt="" width="300px" />
          <div className="">Мое удачное фото</div>
        </div>
      </section>
    </section>
  );
};

export default ProfileInfo;
