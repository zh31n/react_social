import './App.css';
import {Route, Routes} from 'react-router-dom';
import MessangerContainer from './components/Messanger/MessangerContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <div className='app_inner'>
                    <SidebarContainer/>
                    <div className='content'>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/login/*' element={<Login/>}/>
                            <Route path='/messanger/*' element={<MessangerContainer/>}/>
                            <Route path='/users/*' element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

