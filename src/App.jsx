import React, { useState, useEffect } from 'react';
import { Popup } from './components/Popup/Popup';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(true)}>Trigger</button>

      {isVisible && (
        <Popup
          title="Hey you!!!!!!"
          confirmText="Yes"
          cancelText="No, I don't"
          description="Do you want to proceed with the game?"
          onConfirm={() => setIsVisible(false)}
          onCancel={() => setIsVisible(false)}
        />
      )}
    </div>
  );
}

export default App;
