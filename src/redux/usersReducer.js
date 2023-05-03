const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const SET_USERS = "SET_USERS";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

// создается как бы шаблон, достаточно одного элемента
let initialState = {
  users: [
    // пустой массив для париема пользователей
  ],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    // break;

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    // break;

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    // break;

    default:
      return state;
    // break;
  }
};
export const follow_AC = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });

// заполняем пользователей
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
// устанавливаем тукущую страницу
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setUsersTotalCount = (count) => {
  return { type: SET_TOTAL_USERS_COUNT, count };
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export default usersReduser;
