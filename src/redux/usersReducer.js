const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const SET_USERS = "SET-USERS";
// создается как бы шаблон, достаточно одного элемента
let initialState = {
  
  users: [
    // {
    //   id: 0,
    //   fullName: "Andrii",
    //   status: "I am a teacher.",
    //   location: {
    //     country: "Ukraine",
    //     city: "Kyiv",
    //   },
    //   followed: true,
    //   photoUrl:
    //     "https://bipbap.ru/wp-content/uploads/2021/07/ae785830348d0d06a40e79f2219052ad-730x548.jpg",
    // },
    // {
    //   id: 1,
    //   fullName: "Victipiy",
    //   status: "I am a bookceaper.",
    //   location: {
    //     country: "Ukraine",
    //     city: "Odessa",
    //   },
    //   followed: false,
    //   photoUrl:
    //     "https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg",
    // },
    // {
    //   id: 2,
    //   fullName: "Petro",
    //   status: "I no now.",
    //   location: {
    //     countre: "Turque",
    //     city: "Atambul",
    //   },
    //   followed: true,
    //   photoUrl: "https://klike.net/uploads/posts/2019-03/1551511851_21.jpg",
    // },
    // {
    //   id: 3,
    //   fullName: "Helen",
    //   status: "I am a girl.",
    //   location: {
    //     country: "Germany",
    //     city: "Drezden",
    //   },
    //   followed: false,
    //   photoUrl: "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
    // },
  ],
  newKey: "55",
};

const usersReduser = (state = initialState, action) => {

   switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: { ...state.users },
        users: state.users.map(
          // вызываем безимянную функцию
          (u) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            } else {
              return u;
            }
          }
        ),
      };
    // break;

    case UNFOLLOW:
      return {
        ...state,
        // users: { ...state.users },
        users: state.users.map(
          // вызываем безимянную функцию
          (u) => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            } else {
              return u;
            }
          }
        ),
      };
    // break;
    case SET_USERS:
      return {
        ...state,
        // берем существующий стайт и перетираем прользователей
        // склейкой старых и пришедших
        users: [...state.users, ...action.users],
      };
    // break;

    default:
      return state;
    // break;
  }
};
export const followACreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowACreator = (userId) => ({ type: UNFOLLOW, userId });

// заполняем пользователей
export const setUsersACreator = (users) => {

  return { type: SET_USERS, users };
};

export default usersReduser;
