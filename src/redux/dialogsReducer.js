const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

// создается как бы шаблон, достаточно одного элемента
let initialState = {
  dialogs: [
    { id: 0, name: "Jonsonuk" },
    { id: 1, name: "Andrii" },
    { id: 2, name: "Sergii" },
    { id: 3, name: "Victoriya" },
    { id: 4, name: "Petro" },
    { id: 5, name: "Helen" },
  ],
  messages: [
    { id: 0, message: "Привет!" },
    { id: 1, message: "Как дела в принципе." },
    { id: 2, message: "Хочешь поговорить?" },
    { id: 3, message: "Это здорово." },
    {
      id: 4,
      message:
        "Последнее сообщение из списка произвольной длины. Цвет не черный.",
    },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
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
