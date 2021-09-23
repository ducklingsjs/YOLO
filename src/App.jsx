import React, { useEffect, useState } from 'react';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { MainScreen } from './components/MainScreen/MainScreen';
import { Popup } from './components/Popup/Popup';

function App() {
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const eventL = (event) => {
      console.log(event);
      if (event.keyCode === 32) {
        setIsOver(true);
      }
    };

    document.addEventListener('keyup', eventL);

    return () => {
      document.removeEventListener('keyup', eventL);
    };
  }, []);
  return (
    <div className="App">
      {isOver && (
        <Popup
          title="Game is over!"
          description={`${username} won the game! Congrats`}
          confirmText="New game"
          onConfirm={() => window.location.reload()}
        />
      )}
      {username ? <MainScreen username={username} name={name} /> : null}
      {!username ? (
        <LoginComponent onNameSelect={setName} onUsernameSelect={setUsername} />
      ) : null}
    </div>
  );
}

export default App;
