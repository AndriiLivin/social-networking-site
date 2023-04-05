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

  // делаем легкую копию объекта
  let stateCopy = { ...state };

  // можно делать и так, но это не всегда требуется
  // let stateCopy1 = {
  //   ...state,
  //   // именно такой порядок, а не наоборот.
  //   // перезатираются свойства
  //   messages: [...state.messages],
  // };

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      // новая форма записи

      return {
        ...state,
        newMessageBody: action.newBody,
      };

      // return stateCopy;
    // break;
    case SEND_MESSAGE:
      // let newBody = {
      //   id: state.messages.length,
      //   message: state.newMessageBody,
      // };

      // доделываем глубокое попирование объекта
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
      // stateCopy.messages = [...state.messages];

      // stateCopy.messages.push(newBody);
      // обнуляем строку после ее вставки в массив
      // stateCopy.newMessageBody = "";
      // return stateCopy;
    // break;
    default:
      // здесь ничего не помнялось.
      // поэтому возвращаем исходный объект.
      // при его сравнении с исходныь будет полное равенство
      //  и не потребуется перерисовка объекта
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
