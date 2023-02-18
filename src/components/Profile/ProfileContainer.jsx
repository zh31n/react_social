import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/ProfileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserId } from '../../API/api';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        getUserId(userId).then(response => {
            this.props.setUserProfile(response);
        })
        
    }
    render() {
        return (<Profile {...this.props} profile={this.props.profile} />);
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }} />
        );
    }

    return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);