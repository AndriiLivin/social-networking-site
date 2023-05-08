const SET_USER_DATA = "SET_USER_DATA";
const USER_DATA = "USER_DATA";

// создается как бы шаблон, достаточно одного элемента
let initialState = {
  myId: null,
  email: null,
  login: null,
  // для определенности ответа добавляем
  isAuth: false,

  userLogData: {},

  isFetching: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        // возвращаем копию стэйта
        ...state,
        // data{myId,email,login}
        ...action.data,
        // подтверждаем приход данных
        isAuth: true,
      };
    // break;
    case USER_DATA:
      return {
        // возвращаем копию стэйта
        ...state,
        // data{myId,email,login}
        ...action.data,
        // пердаем данные пользователя
        userLogData: action.usLogData,
      };
    // break;

    default:
      return state;
    // break;
  }
};
// создаем actionCreator
export const setAuthUserData = (myId, login, email) => ({
  type: SET_USER_DATA,
  data: { myId, login, email },
});

export const UserData = (usData) => ({
  type: USER_DATA,
  usLogData: usData,
});

export default authReduser;
