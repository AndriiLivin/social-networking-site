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
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newBody,
      };
    // break;

    case SEND_MESSAGE:
      return {
        ...state,
        newMessageBody: "",
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            message: state.newMessageBody,
          },
        ],
      };
    // break;

    default:
      return state;
    // break;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export function upDateNewMessageActionCreator(newMessageText) {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: newMessageText,
  };
}

export default dialogsReducer;
