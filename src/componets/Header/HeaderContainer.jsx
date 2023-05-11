import React from "react";
import Header from "./Header";
// import axios from "axios";
import { connect } from "react-redux";
import { UserData, setAuthUserData } from "../../redux/authReducer";
import { usersAPI } from "../../Api/api";

export let myData;

class HeaderContainer extends React.Component {
  componentDidMount() {
    // ,
    //  {
    //   "name": "Tiffany Stokes",
    //   "avatar": "https://klike.net/uploads/posts/2019-03/1551511827_30.jpg",
    //   "title": "Voluptatibus facere doloremque nobis fuga.",
    //   "status": "Clothing",
    //   "email": "landry2006@ukr.net",
    //   "country": "Morocco",
    //   "city": "East Shanna",
    //   "photosLarge": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1202.jpg",
    //   "followed": false,
    //   "login": "AndriiLivi",
    //   "id": "29001"
    //  }

    // axios
    //   .get(" https://social-network.samuraijs.com/api/1.0/auth/me", {
    //     withCredentials: true,
    //   })
    //  withCredentials - спец.объект, в котором сидят настройки запроса
    usersAPI.getAuthMe().then((response) => {
      if (response.resultCode === 0) {
        // проводим деструктуризацию объукта response.data
        let { id, login, email } = response.data;
        this.props.setAuthUserData(id, login, email);
        // получаем данные прользователя по его id
        // axios
        //   .get(
        //     "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/" + id
        //   )
        usersAPI.getUserOnId(id).then((respons1) => {
          if (respons1.status === 200) {
            myData = respons1.data;
            console.log(myData);
            this.props.UserData(respons1.data);
          }
        });
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapDispatchToProps = (state) => ({
  // передаем интересующие значения в компоненту
  userLogData: state.auth.userLogData,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
  id: state.auth.myId,
});
export default connect(mapDispatchToProps, {
  setAuthUserData,
  UserData,
})(HeaderContainer);
