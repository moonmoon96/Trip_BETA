import React from 'react';
import ReactDOM from 'react-dom/client';
import './Trip.css';
import './index'
import Trip from './Trip';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './Utility/ScrollTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollTop></ScrollTop>
    <Trip />    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
