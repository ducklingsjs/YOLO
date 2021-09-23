import React from 'react';
import Game from '../Game';
import { Sidebar } from '../Sidebar/Sidebar';
import './MainScreen.css';

export const MainScreen = (props) => {
  return (
    <div className="main-screen">
      <h1>DAY IN LIFE OF PROSJECNI JS DEVELOPER 🤖</h1>

      <Game {...props} />
    </div>
  );
};
