import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

// // создаем констаны для именования свойств
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
// const SEND_MESSAGE = "SEND-MESSAGE";

// создаем объекты, состоящие из массива данных
// эти данные в свою очередь тоже являются обьектами
let dialogsData = [
  { id: 0, name: "Jonsonuk" },
  { id: 1, name: "Andrii" },
  { id: 2, name: "Sergii" },
  { id: 3, name: "Victoriya" },
  { id: 4, name: "Petro" },
  { id: 5, name: "Helen" },
];

let messagesData = [
  { id: 0, message: "Привет!" },
  { id: 1, message: "Как дела в принципе." },
  { id: 2, message: "Хочешь поговорить?" },
  { id: 3, message: "Это здорово." },
  {
    id: 4,
    message:
      "Последнее сообщение из списка произвольной длины. Цвет не черный.",
  },
];

let postsData = [
  {
    id: 0,
    message: "Привет. Ты как поживаешь?",
    likesCount: 15,
    image:
      "https://bipbap.ru/wp-content/uploads/2021/07/ae785830348d0d06a40e79f2219052ad-730x548.jpg",
  },
  {
    id: 1,
    message: "It's my first post",
    likesCount: 135,
    image: "https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg",
  },
  {
    id: 2,
    message: "It's post",
    likesCount: 55,
    image: "https://klike.net/uploads/posts/2019-03/1551511851_21.jpg",
  },
  {
    id: 3,
    message: "It's my Life.",
    likesCount: 2135,
    image: "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
  },
];

// создаем объект из объектов, который  содержат массивы данных
let state1 = {
  profilePage: {
    posts: postsData,
    newPostText: "",
  },

  messagesPage: {
    dialogs: dialogsData,
    messages: messagesData,
    newMessageBody: "",
  },
  sidebar: {},
};

// создаем объект из объектов данных и встроенных функций для их обработки
let store = {
  _state: state1,

  //функция вызова наблюдателя
  _callObserver() {
    console.log("Наблюдатель сообщает об изменениях в State.");
  },

  // создаем метод доступа к _state
  getState() {
    return this._state;
  },

  // создается НАБЛЮДАТЕЛЬ
  subscribe(observer) {
    //переопределяем имя _callObserver
    this._callObserver = observer;
  },

  // сохдаем универсальный метод
  dispatch(action) {
    // изменяем свою часть state

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callObserver(this._state);

    // if (action.type === ADD_POST) {
    //   // сохраняем введеное сообщение
    //   let newPost = {
    //     id: this._state.profilePage.posts.length,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //     // image: "",
    //     image:
    //       "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   // обнуляем строку после ее вставки в массив
    //   this._state.profilePage.newPostText = "";

    //   // перерисовываем изменения
    //   this._callObserver(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   //создаем функцию по обработке вводимого текста сообщения
    //   this._state.profilePage.newPostText = action.newText;
    //   // перерисовываем изменения
    //   this._callObserver(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.messagesPage.newMessageBody = action.newBody;
    //   this._callObserver(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let newBody = {
    //     id: this._state.messagesPage.messages.length,
    //     message: this._state.messagesPage.newMessageBody,
    //   };
    //   this._state.messagesPage.messages.push(newBody);
    //   // обнуляем строку после ее вставки в массив
    //   this._state.messagesPage.newMessageBody = "";

    //   // перерисовываем изменения
    //   this._callObserver(this._state);
    // }
  },
};

// export const addPostActionCreator = () => ({ type: ADD_POST });
// export function upDateNewPostActionCreator(newPostText) {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: newPostText,
//   };
// }

// export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
// export function upDateNewMessageActionCreator(newMessageText) {
//   return {
//     type: UPDATE_NEW_MESSAGE_BODY,
//     newBody: newMessageText,
//   };
// }

export default store;
window.store = store;
