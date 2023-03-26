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

// создаем объект из объектов, который  содержат массивы данных
let state1 = {
  profilePage: {
    posts: postsData,
    newPostText: "",
  },

  messagesPage: {
    dialogs: dialogsData,
    messages: messagesData,
  },
};

// создаем объект из объектов данных встроенных функций для их обработки
let store = {
  _state: state1,
  // создаем метод доступа к _state
  getState() {
    return this._state;
  },

  //функция вызова наблюдателя
  _callObserver() {
    console.log("Наблюдатель сообщает об изменениях в State.");
  },

  //
  subscribe(observer) {
    // создается НАБЛЮДАТЕЛЬ
    //переопределяем имя _callObserver
    this._callObserver = observer;
  },

  //создаем функцию по обработке вводимого текста сообщения
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;

    // перерисовываем изменения
    this._callObserver(this._state);
  },

  addPost() {
    let newPost = {
      id: this._state.profilePage.posts.length,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
      // image: "",
      image: "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
    };
    this._state.profilePage.posts.push(newPost);
    // обнуляем строку после ее вставки в массив
    this._state.profilePage.newPostText = "";

    // перерисовываем изменения
    this._callObserver(this._state);
  },
};

// // создаем заглушку для приема содержимого
// // такой же функции снаружи
// // let обязательно для стрелочной или можно Function - ее можно переопределить
// function rerenderEntireTree() {
//   console.log("State изменен.");
// }

// // создаем еще одну функцию, которая предназначена для передачи имени функции
// // без появления цикличности с импортами
// // в этом файле не импортов вообще
// export function subscribe(observer) {
//   // создается НАБЛЮДАТЕЛЬ

//   // не пишем let т.к. нам ненужно создавать,
//   //  а нужно переопределить  ранее созданную заглушку let rerenderEntireTree = () => {
//   // даже изменять содержание заглушки не требуется, просто переопределяем
//   rerenderEntireTree = observer;
// }

// // создаем функцию обработки данных при обратном вызове
// // и сразу экспортируем ее без дефолта
// // а теперь переносим ее в третий файл,
// //  чтобы избежать циклической зависимости
// // и экспортируем в первые два
// export function addPost() {
//   // export function addPost(postMessage) {
//   let newPost = {
//     id: state.profilePage.posts.length,
//     // message: postMessage,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//     // image: "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
//     image: "",
//   };

//   state.profilePage.posts.push(newPost);
//   // обнуляем строку после ее вставки в массив
//   state.profilePage.newPostText = "";

//   // перерисовываем изменения
//   // state можно не передавать, он попадает при определении функции
//   // rerenderEntireTree(state);  а можно и передавать
//   rerenderEntireTree(state);
// }

// //создаем функцию по обработке вводимого текста сообщения
// export function updateNewPostText(newText) {
//   state.profilePage.newPostText = newText;

//   // перерисовываем изменения
//   // state можно не передавать
//   // rerenderEntireTree(state);
//   rerenderEntireTree(state);
// }

export default store;
window.store = store;
