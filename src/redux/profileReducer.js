const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  profile:{},
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            message: state.newPostText,
            likesCount: 0,
            image:
              "https://klike.net/uploads/posts/2019-05/medium/1556705567_5.jpg",
          },
        ],
      };
    // break;

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    // break;
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    // break;

    default:
      return state;
    // break;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export function upDateNewPostActionCreator(newPostText) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText,
  };
}
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
