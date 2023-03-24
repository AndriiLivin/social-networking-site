import React from "react";
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

import style from "./Dialogs.module.css";
import MessageText from "./MessageText/MessageText";

const Dialogs = (props) => {
  // let dialogsData = [
  //   { idPath: 0, name: "Andrii" },
  //   { idPath: 1, name: "Sergii" },
  //   { idPath: 2, name: "Victoriya" },
  //   { idPath: 3, name: "Petro" },
  //   { idPath: 4, name: "Helen" },
  //   { idPath: 5, name: "Gonsonuk" },
  // ];
  // let messagesData = [
  //   { id: 0, message: "Привет!" },
  //   { id: 1, message: "Как дела в принципе." },
  //   { id: 2, message: "Хочешь поговорить?" },
  //   { id: 3, message: "Это здорово." },
  //   { id: 4, message: "Не хочу говорить." },
  // ];

  let dialogsElements = props.data.map((dial) => {
    return <DialogItem key={dial.id} name={dial.name} number={dial.id} />;
  });

  let messagesElements = props.messagesData.map((mess) => {
    return (
      <MessageText key={mess.id} massage={mess.message} number={mess.id} />
    );
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    let textPost = newPostElement.current.value;
    alert(textPost);
  };

  return (
    <section>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>{dialogsElements}</div>

        <div className={style.messages}>{messagesElements}</div>
        <div>
          <section>
            <textarea
              ref={newPostElement}
              
            ></textarea>
          </section>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
