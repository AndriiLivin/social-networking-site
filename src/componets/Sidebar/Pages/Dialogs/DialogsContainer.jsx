import React from "react";
import {
  sendMessageActionCreator,
  upDateNewMessageActionCreator,
} from "../../../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
// import StoreContext from "../../../../StoreContext";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//   // let state = props.store.getState().messagesPage;

//   // let newMessageBody = state.newMessageBody;

//   // function onSendMessageClick() {
//   //   if (newMessageBody === "") {
//   //     props.store.dispatch(upDateNewMessageActionCreator("Пустое сообщение"));
//   //   }
//   //   props.store.dispatch(sendMessageActionCreator());
//   // }

//   // function onNewMessageChange(body) {
//   //   // let body = e.target.value;
//   //   props.store.dispatch(upDateNewMessageActionCreator(body));
//   // }

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().messagesPage;

//         let newMessageBody = state.newMessageBody;

//         function onSendMessageClick() {
//           if (newMessageBody === "") {
//             store.dispatch(upDateNewMessageActionCreator("Пустое сообщение"));
//           }
//           store.dispatch(sendMessageActionCreator());
//         }

//         function onNewMessageChange(body) {
//           // let body = e.target.value;
//           store.dispatch(upDateNewMessageActionCreator(body));
//         }
//         return (
//           <Dialogs
//             upDateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             messagesPage={state}
//             newMessageBody={newMessageBody}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    upDateNewMessageBody: (body) => {
      dispatch(upDateNewMessageActionCreator(body));
    },
    
    sendMessage: () => {
      // if (newMessageBody === "") {
      //   dispatch(upDateNewMessageActionCreator("Пустое сообщение"));
      // }
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
