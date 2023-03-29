const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  // state === this._state.profilePage;
  // т.к. приходит только нужная часть store-state
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: state.newPostText,
        likesCount: 0,
        // image: "",
        image:
          "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
      };

      state.posts.push(newPost);
      // обнуляем строку после ее вставки в массив
      state.newPostText = "";
      return state;
    // break;

    case UPDATE_NEW_POST_TEXT:
      //создаем функцию по обработке вводимого текста сообщения
      state.newPostText = action.newText;
      return state;
    // break;

    default:
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
