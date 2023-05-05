import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

import "./App.css";

import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Music from "./componets/Sidebar/Pages/Music/Music";
import News from "./componets/Sidebar/Pages/News/News";
import Settings from "./componets/Sidebar/Pages/Settings/Settings";
// import Profile from "./componets/Sidebar/Pages/Profile/Profile";
import Sidebar from "./componets/Sidebar/Sidebar";
import DialogsContainer from "./componets/Sidebar/Pages/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Sidebar/Pages/Users/UsersContainer";
import ProfileContainer from "./componets/Sidebar/Pages/Profile/ProfileContainer";

const App = (props) => {

  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />

      <main className="App-wrapper__pages">
        <Routes>

          <Route path="/Profile/*" element={<ProfileContainer />} />

          <Route path="/Dialogs/*" element={<DialogsContainer />} />

          <Route path="/News/*" element={<News />} />
          <Route path="/Music/*" element={<Music />} />

          <Route path="/Users/*" element={<UsersContainer />} />

          <Route path="/Settings/*" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
