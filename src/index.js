import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addPost, subscribe, updateNewPostText } from './Redux/state';
import store from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntire = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>
  );
}


renderEntire(store.getState());
store.subscribe(renderEntire);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

