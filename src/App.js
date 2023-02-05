import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MessangerContainer from './components/Messanger/MessangerContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <div className='app_inner'>
          <Sidebar state={props.state.sideBar} />
          <div className='content'>
            <Routes>
              <Route path='/*' element={<Profile store={props.store} />} />
              <Route path='/Messanger/*' element={<MessangerContainer store={props.store} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
