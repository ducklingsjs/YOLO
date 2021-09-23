import React, { useState } from 'react';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { MainScreen } from './components/MainScreen/MainScreen';

function App() {
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);

  return (
    <div className="App">
      {username ? <MainScreen username={username} name={name} /> : null}
      {!username ? <LoginComponent onNameSelect={setName} onUsernameSelect={setUsername} /> : null}
    </div>
  );
}

export default App;
