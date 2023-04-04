import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/redux_store";
// import StoreContext, { Provider } from "./StoreContext";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));

// создаем функцию перерисовки всего дерева
export function rerenderEntireTree() {
  // export function rerenderEntireTree(state2) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>

        {/* <StoreContext.Provider value={store}>
                    <App />
          <App
            appState={state2}
            dispatch={store.dispatch.bind(store)}
            store={store}
          />
        </StoreContext.Provider> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

// rerenderEntireTree(store.getState());
rerenderEntireTree();
// передаем имя функции в subscribe, а ее получаем как метод store
store.subscribe(() => {
  // rerenderEntireTree(store.getState());
  rerenderEntireTree();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
