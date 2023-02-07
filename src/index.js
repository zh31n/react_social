import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addPost, subscribe, updateNewPostText } from './Redux/state';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
// import StoreContext, { Provider } from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// renderEntire();
// store.subscribe(() => {
//   let state = store.getState();
//   renderEntire(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

