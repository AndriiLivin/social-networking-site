// import React from "react";
import {
  sendMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    // приходит флаг из пропсов об авторизации
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    upDateNewMessageBody: (body) => {
      dispatch(upDateNewMessageActionCreator(body));
    },
    
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
