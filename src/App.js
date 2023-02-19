import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MessangerContainer from './components/Messanger/MessangerContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <HeaderContainer />
        <div className='app_inner'>
          <SidebarContainer />
          <div className='content'>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/messanger/*' element={<MessangerContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
