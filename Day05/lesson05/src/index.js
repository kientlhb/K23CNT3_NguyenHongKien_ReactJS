import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NhkApp from './NhkApp' ;

const nhkroot = ReactDOM.createRoot(document.getElementById('nhkroot'));
nhkroot.render(
  <React.StrictMode>
    <NhkApp />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
