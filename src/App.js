import logo from './logo.svg';
import React from 'react';
import Board from "./components/Board"
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="game-container">
        <div id="game-header">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
