const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  // state === this._state.messagesPage;
  // т.к. приходит только нужная часть store-state

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newBody;
      return state;
      // break;
    case SEND_MESSAGE:
      let newBody = {
        id: state.messages.length,
        message: state.newMessageBody,
      };
      state.messages.push(newBody);
      // обнуляем строку после ее вставки в массив
      state.newMessageBody = "";
      return state;
      // break;
    default:
      return state;
      // break;
  }

  // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
  //   state.newMessageBody = action.newBody;
  //   // this._callObserver(this._state);
  // } else if (action.type === SEND_MESSAGE) {
  //   let newBody = {
  //     id: state.messages.length,
  //     message: state.newMessageBody,
  //   };
  //   state.messages.push(newBody);
  //   // обнуляем строку после ее вставки в массив
  //   state.newMessageBody = "";

  //   // перерисовываем изменения
  //   // this._callObserver(this._state);
  // }
  // return state;
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export function upDateNewMessageActionCreator(newMessageText) {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: newMessageText,
  };
}

export default dialogsReducer;
