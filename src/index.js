import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lifecycle from './app.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
//  <React.StrictMode>
    
    
 
    <Lifecycle />,

  // </React.StrictMode>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();