import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/state";
// import state, { subscribe } from "./redux/state";
// import { addPost } from "./redux/state";
// import { updateNewPostText } from "./redux/state";

// import { rerenderEntireTree } from "./render";

const root = ReactDOM.createRoot(document.getElementById("root"));

// создаем функцию перерисовки всего дерева
export function rerenderEntireTree(state2) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state2}
          dispatch={store.dispatch.bind(store)} />
        {/* <App
          appState={state2}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        /> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
// передаем имя функции в subscribe, а ее импортируем из  state
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
