const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

// создается как бы шаблон, достаточно одного элемента
let initialState = {
  posts: [
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
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  // state === this._state.profilePage;
  // т.к. приходит только нужная часть store-state

  // делаем легкую копию объекта
  // let stateCopy = { ...state };

  switch (action.type) {
    case ADD_POST:
      // let newPost = {
      //   id: state.posts.length,
      //   message: state.newPostText,
      //   likesCount: 0,
      //   // image: "",
      //   image:
      //     "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
      // };

      // доделываем глубокое попирование объекта
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            message: state.newPostText,
            likesCount: 0,
            // image: "",
            image:
              "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
          },
        ],
      };
      // stateCopy.posts = [...state.posts];

      // stateCopy.posts.push(newPost);
      // обнуляем строку после ее вставки в массив
      // stateCopy.newPostText = "";
      // return stateCopy;
    // break;

    case UPDATE_NEW_POST_TEXT:
      //создаем функцию по обработке вводимого текста сообщения
      // let stateCopy = { ...state };
      return {
        ...state,
        newPostText: action.newText,
      };

      // stateCopy.newPostText = action.newText;
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

  // if (action.type === ADD_POST) {
  //   // сохраняем введеное сообщение
  //   let newPost = {
  //     id: state.posts.length,
  //     message: state.newPostText,
  //     likesCount: 0,
  //     // image: "",
  //     image: "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
  //   };

  //   state.posts.push(newPost);
  //   // обнуляем строку после ее вставки в массив
  //   state.newPostText = "";

  //   // перерисовываем изменения
  //   // удалили т.к. никого не уведомляем
  //   // this._callObserver(this._state);

  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   //создаем функцию по обработке вводимого текста сообщения
  //   state.newPostText = action.newText;

  //   // перерисовываем изменения
  //   // удалили т.к. никого не уведомляем
  //   // this._callObserver(this._state);
  //   // this._callObserver(this._state);
  // }

  // return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export function upDateNewPostActionCreator(newPostText) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText,
  };
}

export default profileReducer;
