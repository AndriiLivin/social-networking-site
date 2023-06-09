import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

import "./App.css";

import Footer from "./componets/Footer/Footer";

import Music from "./componets/Sidebar/Pages/Music/Music";
import News from "./componets/Sidebar/Pages/News/News";
import Settings from "./componets/Sidebar/Pages/Settings/Settings";

import Sidebar from "./componets/Sidebar/Sidebar";
import DialogsContainer from "./componets/Sidebar/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Sidebar/Pages/Users/UsersContainer";
import ProfileContainer from "./componets/Sidebar/Pages/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";

// const App = (props) => {
const App = () => {
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <Sidebar />

      <main className="App-wrapper__pages">
        <Routes>
          {/* знак ? означает, что параметр :userId? не обязательный */}
          <Route path="/Profile/:userId?" element={<ProfileContainer />} />

          <Route path="/Dialogs/*" element={<DialogsContainer />} />

          <Route path="/News/*" element={<News />} />
          <Route path="/Music/*" element={<Music />} />

          <Route path="/Users/*" element={<UsersContainer />} />

          <Route path="/Settings/*" element={<Settings />} />

          <Route path="/login/*" element={<LoginPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
