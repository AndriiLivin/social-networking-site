import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import MessageText from "./MessageText/MessageText";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  console.log(props);
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map((dial) => {
    return <DialogItem key={dial.id} name={dial.name} number={dial.id} />;
  });

  let messagesElements = state.messages.map((mess) => {
    return (
      <MessageText key={mess.id} massage={mess.message} number={mess.id} />
    );
  });

  let newMessageBody = state.newMessageBody;

  function onSendMessageClick() {
    if (newMessageBody === "") {
      props.upDateNewMessageBody("Пустое сообщение");
    }
    props.sendMessage();
  }

  function onNewMessageChange(e) {
    let body = e.target.value;
    props.upDateNewMessageBody(body);
  }

  return (
    <section>
      <div className={style.dialogs}>
        <div className={style.dialogs_items}>
          <div>{dialogsElements}</div>
        </div>

        <div className={style.messages}>
          <div>{messagesElements}</div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message."
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
