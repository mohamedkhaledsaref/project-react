import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import OneEle from './Components/ClassComponen/ClassCompon';
import Two from './Components/FunctionComponen/FunctionComponen';
import FunctionalProps from './Components/Props/pro';
import Student from './Components/ClassProp/ClassProps';
import Stat from './Components/State/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <OneEle />
    <Two />
    <FunctionalProps />
    <Student fname="mohamed" lname="khaled"></Student>
    <Student courses="HR" />
    <Student studied="BI">
      <p>hello</p>
    </Student>
    <Stat />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
