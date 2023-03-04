import React from 'react';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../Redux/ProfileReducer';
import Profile from './Profile';
import {compose} from 'redux';
import {withRouter} from "../../hoc/withRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.LogginedUserId;
            if(!userId){
                this.props.router.navigate('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />);
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    LogginedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});





export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);;