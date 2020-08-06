import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MyCoolButton} from './components/MyCoolButton';
import {Comment} from "./components/comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comment zohiogch="Сандаг"/>
      </header>
    </div>
  );
}

export default App;
