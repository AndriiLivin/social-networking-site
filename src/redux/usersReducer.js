const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const SET_USERS = "SET-USERS";
// создается как бы шаблон, достаточно одного элемента
let initialState = {
  users: [
    // пустой массив для париема пользователей
  ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        // возвращаем копию стэйта
        ...state,

        //  возвращаем копию пользователей
        // users: { ...state.users },

        //  или тоже самое, но через MAP
        // map возвращает копию массива на основе заданного
        // при этом происходит перебор по условиям
        users: state.users.map(
          // вызываем безимянную функцию
          (u) => {
            if (u.id === action.userId) {
              // возвращаем копию пользователя по совпадению ID
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
        // users: [...state.users, ...action.users],

        // уже этого не делаем
        users: [...action.users],
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
