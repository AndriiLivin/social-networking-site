import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// очень плохо ссылаться циклически, поэтому передаем через пропс
// import state from "./redux/state";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";

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
