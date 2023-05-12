import { usersAPI } from "../Api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const SET_USERS = "SET_USERS";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

// создается как бы шаблон, достаточно одного элемента
let initialState = {
  users: [
    // пустой массив для париема пользователей
  ],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
          ? [...state.followingInProgress, action.userId]
          : // .filter вернет новый массив, поэтому не спредим ...
            state.followingInProgress.filter((id) => id !== action.userId),
      };
    // break;

    default:
      return state;
    // break;
  }
};

// экшен криэйторы
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

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

export const toggleFollowingInProgress = (inProgress, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, userId };
};

//ThunkCreator
export const getUsersThunkCreator = (currentPage = 1, pageSize = 3) => {
  return (dispatch) => {
    // при запросе включаем крутилку
    // this.props.toggleIsFetching(true);
    // т.к. находится прямо тут
    dispatch(toggleIsFetching(true));
    // записываем текущую страницу
    dispatch(setCurrentPage(currentPage));

    usersAPI
      // .getUsers(this.props.currentPage, this.props.pageSize)
      .getUsersAPI(currentPage, pageSize)
      .then((respData) => {
        // когда приходит ответ выключаем крутилку
        dispatch(toggleIsFetching(false));

        let data = [];
        const iMax =
          pageSize * currentPage < respData.length
            ? pageSize * currentPage
            : respData.length;

        for (let i = pageSize * (currentPage - 1); i < iMax; i++) {
          // data.push(respData[i]);
          data = [...data, respData[i]];
        }

        dispatch(setUsers(data));

        dispatch(setUsersTotalCount(respData.length));
      });
  };
};

//ThunkCreator
export const follow_AC = (userId) => {
  return (dispatch) => {
    // начинается асинхронный запрос
    dispatch(toggleFollowingInProgress(true, userId));

    usersAPI.setFollow(userId, true).then((response) => {
      if (response.status === 200) {
        dispatch(followSuccess(userId));
      }

      // заканчивается асинхронный запрос
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

//ThunkCreator
export const unfollow = (userId) => {
  return (dispatch) => {
    // начинается асинхронный запрос
    dispatch(toggleFollowingInProgress(true, userId));

    usersAPI.setFollow(userId, false).then((response) => {
      if (response.status === 200) {
        dispatch(unfollowSuccess(userId));
      }

      // заканчивается асинхронный запрос
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReduser;
