import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

import "./App.css";

// import Dialogs from "./componets/Sidebar/Pages/Dialogs/Dialogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Music from "./componets/Sidebar/Pages/Music/Music";
import News from "./componets/Sidebar/Pages/News/News";
import Settings from "./componets/Sidebar/Pages/Settings/Settings";
import Profile from "./componets/Sidebar/Pages/Profile/Profile";
import Sidebar from "./componets/Sidebar/Sidebar";
import DialogsContainer from "./componets/Sidebar/Pages/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />

      <main className="App-wrapper__content">
        <Routes>
          <Route
            path="/Profile"
            element={
              <Profile
                // store={props.store}
                
                // postsData={props.appState.profilePage}
                // dispatch={props.dispatch}
              />
            }
          />

          <Route
            path="/Dialogs"
            
            element={<DialogsContainer
              // store={props.store}
            />}
          />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
