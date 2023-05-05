import React from "react";

// import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";

import { setUserProfile } from "../../../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/1`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <section>
        {/* все приходящие пропсы прокидываем 
        в презентационную компоненту */}
        <Profile {...this.props} profile={this.props.profile} />
      </section>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
