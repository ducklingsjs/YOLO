import React, { Fragment, useState } from 'react';
import Gallery from './GalleryComponent/Gallery';
import './LoginComponent.css';

export default function LoginComponent(props) {
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [username, setUsername] = useState('');

  function handleSelectedAvatar(e) {
    setSelectedAvatar(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <div className="login-component">
      <h2>Welcome to DILPJ 👋</h2>

      <div className="inputs">
        <input
          onChange={handleUsername}
          value={username}
          type="text"
          name="Username"
          placeholder="Type in your username..."
        />
        {username && (
          <input
            onChange={handleSelectedAvatar}
            value={selectedAvatar}
            type="text"
            name="Search avatar"
            placeholder="Search avatar"
          ></input>
        )}
      </div>
      {username && (
        <Gallery
          selectedAvatar={selectedAvatar}
          onNameSelect={(name) => {
            props.onNameSelect(name);
            props.onUsernameSelect(username);
          }}
        />
      )}
    </div>
  );
}
