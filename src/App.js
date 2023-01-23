import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Messanger from './components/Messanger/Messanger';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <div className='app_inner'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/Profile/*' element={<Profile />}/>
              <Route path='/Messanger/*' element={<Messanger />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
