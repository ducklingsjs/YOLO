import React, { useEffect, useState, useRef } from 'react';
import './Sidebar.css';

const PLAYERS_LENGTH = 4;
const MESSAGES = [
  { text: 'dani joined the game' },
  { text: 'buha joined the game' },
  { text: 'dario joined the game' },
  { text: 'buha moved 6 steps forwards' },
  { text: 'dario moved 2 steps backwards' },
  { text: 'dani moved 3 steps forwards' },
  { text: 'dani joined the game' },
  { text: 'buha joined the game' },
  { text: 'dario joined the game' },
  { text: 'buha moved 6 steps forwards' },
  { text: 'dario moved 2 steps backwards' },
  { text: 'dani moved 3 steps forwards' },
  { text: 'dani joined the game' },
  { text: 'buha joined the game' },
  { text: 'dario joined the game' },
  { text: 'buha moved 6 steps forwards' },
  { text: 'dario moved 2 steps backwards' },
  { text: 'dani moved 3 steps forwards' },
];

export const Sidebar = () => {
  const [messages, setMessages] = useState(MESSAGES);
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
    console.log(messagesRef);
  }, [messages]);

  return (
    <div className="sidebar">
      <h3>{PLAYERS_LENGTH} players active</h3>

      <div className="messages" ref={messagesRef}>
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>
              {message.username && <span>{message.username}: </span>}
              {message.text}
            </p>
          </div>
        ))}
      </div>

      <textarea
        type="text"
        rows={5}
        value={message}
        placeholder="Taunt you enemies..."
        onKeyPress={handleKeyPress}
        onChange={(event) => setMessage(event.target.value)}
      />
    </div>
  );
};
