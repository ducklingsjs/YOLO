import React, { useEffect, useState, useRef } from 'react';
import './Sidebar.css';

const PLAYERS_LENGTH = 4;

export const Sidebar = ({ gameMessages }) => {
  const [message, setMessage] = useState('');
  const username = 'buha';

  const messagesRef = useRef();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && Boolean(event.target.value.trim())) {
      setMessages((prevState) => [
        ...prevState,
        { text: event.target.value, username },
      ]);
      setMessage('');
    }
  };

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [gameMessages]);

  return (
    <div className="sidebar">
      <h3>{PLAYERS_LENGTH} players active</h3>

      <div className="messages" ref={messagesRef}>
        {gameMessages.map((message, index) => (
          <div key={index} className="message">
            <p>
              {message.username && <span>{message.username}: </span>}
              {message.text}
            </p>
          </div>
        ))}
      </div>

      {/* <textarea
        type="text"
        rows={5}
        value={message}
        placeholder="Taunt you enemies..."
        onKeyPress={handleKeyPress}
        onChange={(event) => setMessage(event.target.value)}
      /> */}
    </div>
  );
};
