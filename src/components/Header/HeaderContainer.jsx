import axios from 'axios';
import React from 'react';
import Header from './Header';


class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me')
    }
    render(){
        return <Header {...this.props} />;
    }
    
}

export default HeaderContainer;