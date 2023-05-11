import React from "react";

// import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";

import { setUserProfile } from "../../../../redux/profileReducer";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../../../Api/api";
import { myData } from "../../../Header/HeaderContainer";

// wrapper to use react router's v6 hooks in class component
// (to use HOC pattern, like in router v5)
function withRouter(ComponentW) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <ComponentW {...props} router1={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router1.params.userId || myData.id;
    // profileId = profileId ? profileId : 2;

    // axios
    //   // .get(`https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/1`)
    //   // .get(
    //     // `https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/${profileId}`
    //   .get(
    //     `https://643e90e66c30feced82c8d63.mockapi.io/seria/0/bases/` + profileId
    // )

    usersAPI.getUserOnId(profileId).then((response) => {
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
})(withRouter(ProfileContainer));
