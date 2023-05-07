import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReduser from "./usersReducer";
import authReduser from "./authReducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  auth: authReduser,
});

// создается state из частей
let store = legacy_createStore(reducers);

window.store = store;

export default store;

