import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import GlobalStyled from './GlobalStyled';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    <GlobalStyled/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);