import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



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
