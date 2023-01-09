import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
    <div className='app_wrapper'>
      <Header />
      <div className='app_inner'>
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
