import { usersAPI } from "../Api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_MY_DATA = "SET_MY_DATA";

let initialState = {
  myId: null,
  email: null,
  login: null,
  
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
    case SET_MY_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        // передаем данные пользователя
        userLogData: action.usLogData,
      };

    default:
      return state;
  }
};
// создаем actionCreator
// export const setAuthUserData = (myId, login, email) => ({
const setAuthUserData = (myId, login, email) => ({
  type: SET_USER_DATA,
  data: { myId, login, email },
});

export const setMyData = (usData) => ({
  type: SET_MY_DATA,
  usLogData: usData,
});

export const getAuthUserData = () => (dispath) => {
  usersAPI.getAuthMe().then((response) => {
    if (response.data.resultCode === 0) {

      // проводим деструктуризацию объукта response.data
      let { id, login, email } = response.data.data;
      dispath(setAuthUserData(id, login, email));

      usersAPI.getUserOnId(id).then((respons1) => {
        if (respons1.status === 200) {
          dispath(setMyData(respons1.data));
        }
      });
    }
  });
};

export default authReduser;
