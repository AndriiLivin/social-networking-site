import axios from "axios";

// const baseURL = "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/";

// instance - это экземпляр;

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

const instanceAuthMe = axios.create({
  // писать с большой буквы URL
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const usersAPI = {
  getUsersAPI(currentPage = 1, pageSize = 3) {
    // в моем случае currentPage = 1, pageSize = 3 не используется
    return (
      // axios
      //  в instance уже забит базовый URL, поэтому его не пишем в самом запросе
      instance
        .get("bases")
        // сюда приходит полный сложный response
        // а из него нужно только data
        .then((response) => {
          return response.data;
        })
    );
  },

  getUserOnId(id = 1) {
    return (
      // axios
      //  в instance уже забит базовый URL, поэтому его не пишем в самом запросе
      instance.get("bases/" + id)
      // возвращаем весь response т.к. нужно status: 200
      // .then((response) => {
      //   return response;
      // })
    );
  },

  // getAuthMe() {
  //   return instanceAuthMe.get("auth/me").then((response) => {
  //     return response.data;
  //   });
  // },
  getAuthMe() {
    return instanceAuthMe.get("auth/me");
  },

  setFollow(id, trueOrFalse) {
    return instance.put("bases/" + id, { followed: trueOrFalse });
    // возвращаем весь response
  },
};
