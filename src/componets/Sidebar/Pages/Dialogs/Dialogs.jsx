import React from "react";
import {
  sendMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../../redux/state";

import DialogItem from "./DialogItem/DialogItem";

import style from "./Dialogs.module.css";
import MessageText from "./MessageText/MessageText";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

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
      props.store.dispatch(upDateNewMessageActionCreator("Пустое сообщение"));
    }
    props.store.dispatch(sendMessageActionCreator());
  }

  function onNewMessageChange(e) {
    let body = e.target.value;
    props.store.dispatch(upDateNewMessageActionCreator(body));
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
