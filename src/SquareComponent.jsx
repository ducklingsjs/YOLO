import React, { useState, useEffect } from 'react';

function SquareComponent({ callback, maxNumber }) {
  const [randomNumber, setRandomNumber] = useState();

  return (
    <div onClick={() => setRandomNumber(Math.floor(Math.random() * maxNumber))}>
      <p>Random number is:</p>
      <p>{randomNumber}</p>
    </div>
  );
}

export default SquareComponent;
