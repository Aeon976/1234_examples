import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MyCoolButton} from './components/MyCoolButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCoolButton tovchNer="Миний лайтай товч" text="Намайг кликдээч"/>
        <MyCoolButton tovchNer="Миний гоё товч" text="Намайг дараач"/>
        <MyCoolButton tovchNer="Миний цоглог товч"/>
        <MyCoolButton />
      </header>
    </div>
  );
}

export default App;
