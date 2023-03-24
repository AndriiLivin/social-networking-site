import { rerenderEntireTree } from "../render";

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

// создаем объект из объектов, кот содержат массивы данных
let state = {
  profilePage: {
    posts: postsData,
    newPostText: "",
  },

  messagesPage: {
    dialogs: dialogsData,
    messages: messagesData,
  },
};

// window.state = state;

// создаем функцию обработки данных при обратном вызове
// и сразу экспортируем ее без дефолта
// а теперь переносим ее в третий файл,
//  чтобы избежать циклической зависимости
// и экспортируем в первые два
export function addPost() {
  // export function addPost(postMessage) {
  let newPost = {
    id: state.profilePage.posts.length,
    // message: postMessage,
    message: state.profilePage.newPostText,
    likesCount: 0,
    // image: "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
    image: "",
  };

  state.profilePage.posts.push(newPost);
  // обнуляем строку после ее вставки в массив
  state.profilePage.newPostText = "";

  // перерисовываем изменения
  rerenderEntireTree(state);
}

//создаем функцию по обработке вводимого текста сообщения
export function updateNewPostText(newText) {
  state.profilePage.newPostText = newText;

  // перерисовываем изменения
  rerenderEntireTree(state);
}

export default state;
