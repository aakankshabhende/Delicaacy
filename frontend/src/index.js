import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
