import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
  setMyData,
  getAuthUserData,
} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
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
  getAuthUserData,
  setMyData,
})(HeaderContainer);
