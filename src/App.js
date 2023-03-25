import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Dialogs from "./componets/Sidebar/Pages/Dialogs/Dialogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Music from "./componets/Sidebar/Pages/Music/Music";
import News from "./componets/Sidebar/Pages/News/News";
import Settings from "./componets/Sidebar/Pages/Settings/Settings";
import Profile from "./componets/Sidebar/Pages/Profile/Profile";
import Sidebar from "./componets/Sidebar/Sidebar";

const App = (props) => {
  // let dialogsData = [
  //   { idPath: 0, name: "Andrii" },
  //   { idPath: 1, name: "Sergii" },
  //   { idPath: 2, name: "Victoriya" },
  //   { idPath: 3, name: "Petro" },
  //   { idPath: 4, name: "Helen" },
  //   { idPath: 5, name: "Gonsonuk" },
  // ];

  // let postsData = [
  //   {
  //     id: 0,
  //     message: "Привет. Ты как поживаешь?",
  //     likesCount: 15,
  //     image:
  //       "https://bipbap.ru/wp-content/uploads/2021/07/ae785830348d0d06a40e79f2219052ad-730x548.jpg",
  //   },
  //   {
  //     id: 1,
  //     message: "It's my first post",
  //     likesCount: 135,
  //     image: "https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg",
  //   },
  //   {
  //     id: 2,
  //     message: "It's post",
  //     likesCount: 55,
  //     image: "https://klike.net/uploads/posts/2019-03/1551511851_21.jpg",
  //   },
  //   {
  //     id: 3,
  //     message: "It's my Life.",
  //     likesCount: 2135,
  //     image: "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
  //   },
  // ];

  return (
    // <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Sidebar />

      <main className="App-wrapper__content">
        <Routes>
          <Route
            path="/Profile"
            element={
              <Profile
               
                postsData={props.appState.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          {/* <Profile /> */}

          <Route
            path="/Dialogs"
            element={
              <Dialogs
                data={props.appState.messagesPage.dialogs}
                messagesData={props.appState.messagesPage.messages}
              />
            }
          />
          {/* <Dialogs /> */}

          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
    // </BrowserRouter>
  );
};

export default App;
