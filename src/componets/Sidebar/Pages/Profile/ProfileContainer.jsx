import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

import {
  getUserProfile,
} from "../../../../redux/profileReducer";

import { useLocation, useNavigate, useParams } from "react-router-dom";

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
    let profileId = this.props.router1.params.userId || 29001;
    // profileId = profileId ? profileId : 2;

    this.props.getUserProfile(profileId);
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
  getUserProfile,
})(withRouter(ProfileContainer));
