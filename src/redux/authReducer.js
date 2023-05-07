const SET_USER_DATA = "SET_USER_DATA";

// создается как бы шаблон, достаточно одного элемента
let initialState = {
  myId: null,
  email: null,
  login: null,
  isAuth: false,
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
        isAuth: true,
      };
    // break;

    default:
      return state;
    // break;
  }
};
// создаем actionCreator
export const setAuthUserData = (myId, email, login) => ({
  type: SET_USER_DATA,
  data: { myId, email, login },
});

export default authReduser;
