import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MessangerContainer from './components/Messanger/MessangerContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <div className='app_inner'>
          <SidebarContainer />
          <div className='content'>
            <Routes>
              <Route path='/*' element={<Profile />} />
              <Route path='/Messanger/*' element={<MessangerContainer />} />
              <Route path='/Users/*' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
