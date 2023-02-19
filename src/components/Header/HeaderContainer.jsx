import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../Redux/AuthReducer'
import { UsersApi } from '../../API/api';


class HeaderContainer extends React.Component {
    componentDidMount() {
        UsersApi.getAuth().then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }
    render() {
        return <Header {...this.props} />;
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);