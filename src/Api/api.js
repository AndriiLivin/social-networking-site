import axios from "axios";

// const baseURL = "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/";

// instance - это экземпляр;

const instance = axios.create({
  // писать с большой буквы URL
  baseURL: "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/",
});

const instanceAuthMe = axios.create({
  // писать с большой буквы URL
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const usersAPI = {
  getUsersAPI(currentPage = 1, pageSize = 3) {
    return (
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
    return instance.get("bases/" + id);
    // возвращаем весь response т.к. нужно status: 200
  },

  getAuthMe() {
    return instanceAuthMe.get("auth/me");
  },

  setFollow(id, trueOrFalse) {
    return instance.put("bases/" + id, { followed: trueOrFalse });
    // возвращаем весь response
  },
};
