import React, { useState } from 'react';
import Gallery from './Gallery';

export default function AutoCompleteComponent(props) {
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [username, setUsername] = useState('');

  function handleSelectedAvatar(e) {
    setSelectedAvatar(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <div>
      <label htmlFor="Username">Username</label>
      <input
        onChange={handleUsername}
        value={username}
        type="text"
        name="Username"
      ></input>
      <label htmlFor="Search avatar">Search avatar</label>
      <input
        onChange={handleSelectedAvatar}
        value={selectedAvatar}
        type="text"
        name="Search avatar"
      ></input>
      <Gallery selectedAvatar={selectedAvatar}></Gallery>
    </div>
  );
}
