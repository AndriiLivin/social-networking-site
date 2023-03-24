import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import state, { subscribe } from "./redux/state";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";

// import { rerenderEntireTree } from "./render";

const root = ReactDOM.createRoot(document.getElementById("root"));



// создаем функцию перерисовки всего дерева
export function rerenderEntireTree(state) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(state);
// передаем имя функции в subscribe, а ее импортируем из  state
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
