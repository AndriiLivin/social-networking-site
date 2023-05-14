import { usersAPI } from "../Api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_MY_DATA = "SET_MY_DATA";

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
    case SET_MY_DATA:
      return {
        // возвращаем копию стэйта
        ...state,
        // data{myId,email,login}
        ...action.data,
        // передаем данные пользователя

        userLogData: action.usLogData,
      };
    // break;

    default:
      return state;
    // break;
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
      // получаем данные прользователя по его id
      // axios
      //   .get(
      //     "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/" + id
      //   )

      usersAPI.getUserOnId(id).then((respons1) => {
        if (respons1.status === 200) {
          dispath(setMyData(respons1.data));
        }
      });
    }
  });
};

export default authReduser;
