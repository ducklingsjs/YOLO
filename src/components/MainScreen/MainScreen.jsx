import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import './MainScreen.css';

export const MainScreen = () => {
  return (
    <div className="main-screen">
      <h1>DAY IN LIFE OF PROSJECNI JS DEVELOPER 🤖</h1>

      <div className="layout">
        <div
          style={{
            flex: 2,
            height: 600,
            background: 'pink',
            marginRight: '40px',
          }}
        >
          GAME
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
