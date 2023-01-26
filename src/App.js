import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Messanger from './components/Messanger/Messanger';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



const  App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <div className='app_inner'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/Profile/*' element={<Profile state={props.state.profilePage} />} />
              <Route path='/Messanger/*' element={<Messanger state={props.state.messangerPage} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
