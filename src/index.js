import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
< BrowserRouter>
    <App />
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you wanttostart measuring performance in your app, pass afunction
//tolog results (for example: reportWebVitals(console.log))
// or sendtoan analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
