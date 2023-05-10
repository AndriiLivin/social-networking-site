import axios from "axios";

// const baseURL = "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/";

const instance = axios.create({
  // писать с большой буквы URL
  baseURL: "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/",

  //  в моем случае не используется,  а так сюда забиваем доп настройки

  // withCredentials: true,
  //  Credentials учетные данные, полномочия, мандаты

  // headers: {
  //   "API-KEY": "da348022-003c-4c1b-9e99-dc746465860c",
  // },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 3) {
    return (
      // axios
      //  в instance уже забит базовый URL, поэтому его не пишем в самом запросе
      instance
        .get("bases")
        // сюда приходит сполный сложный response
        // а из него нужно только data
        .then((response) => {
          return response.data;
        })
    );
  },

  // axios
  //   .get(
  //     `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize},
  // {withCredentials: true}`
  //   )
};
