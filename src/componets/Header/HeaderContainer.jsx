import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      // .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/auth/me", {
      //   withCredentials: true,
      // })
      // .get(" https://social-network.samuraijs.com/api/1.0/auth/me", {
      //   withCredentials: true,
      // })
      .get(" https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/1")
      .then((response) => {
        console.log(response);
        if (response.statusText === "OK") {
          // проводим деструктуризацию объукта response.data
          let { id, email, login } = response.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapDispatchToProps = (state) => ({

  isAuth: state.auth.isAuth ,
  login: state.auth.login,
});
export default connect(mapDispatchToProps, { setAuthUserData })(
  HeaderContainer
);
