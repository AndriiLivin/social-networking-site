import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { UserData, setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios

      .get(" https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })

      .then((response) => {
        console.log(response.data);

        if (response.data.resultCode === 0) {
          // проводим деструктуризацию объукта response.data
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
          // получаем данные прользователя по его id
          axios
            .get(
              "https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/" + id
            )
            .then((respons1) => {
              if (respons1.status === 200) {
                console.log(respons1);
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
