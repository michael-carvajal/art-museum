import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { harvardArt } from './data/harvardArt.js'
// console.log(harvardArt);
const Root = () => {
  return (
    <BrowserRouter>
    <App harvardArt={harvardArt}/>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
