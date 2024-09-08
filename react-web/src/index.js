import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './App';
import Isi from './component/isi'
import Foot from './component/foot'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Isi/>
    <Foot/>
  </React.StrictMode>
);