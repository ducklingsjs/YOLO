import React, { useState, useEffect } from 'react';
import AutoCompleteComponent from './AutoCompleteComponent';
import SquareComponent from './SquareComponent';

function App() {
  return (
    <div className="App">
      <SquareComponent maxNumber="10"></SquareComponent>
      <AutoCompleteComponent></AutoCompleteComponent>
    </div>
  );
}

export default App;
