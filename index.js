import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Del from './del';
import Mongodisplay from './mongodisplay';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route exact path='/' element={<App/>}></Route>
    <Route exact path='/del' element={<Del/>}></Route>
    <Route exact path='/mongodisplay' element={<Mongodisplay/>}></Route>
  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
