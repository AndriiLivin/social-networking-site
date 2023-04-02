import React from "react";
import {
  sendMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import StoreContext from "../../../../StoreContext";

const DialogsContainer = (props) => {
  // let state = props.store.getState().messagesPage;

  // let newMessageBody = state.newMessageBody;

  // function onSendMessageClick() {
  //   if (newMessageBody === "") {
  //     props.store.dispatch(upDateNewMessageActionCreator("Пустое сообщение"));
  //   }
  //   props.store.dispatch(sendMessageActionCreator());
  // }

  // function onNewMessageChange(body) {
  //   // let body = e.target.value;
  //   props.store.dispatch(upDateNewMessageActionCreator(body));
  // }

  return (
   
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;

        let newMessageBody = state.newMessageBody;

        function onSendMessageClick() {
          if (newMessageBody === "") {
            store.dispatch(
              upDateNewMessageActionCreator("Пустое сообщение")
            );
          }
          store.dispatch(sendMessageActionCreator());
        }

        function onNewMessageChange(body) {
          // let body = e.target.value;
          store.dispatch(upDateNewMessageActionCreator(body));
        }
        return (
          <Dialogs
            upDateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state}
            newMessageBody={newMessageBody}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
