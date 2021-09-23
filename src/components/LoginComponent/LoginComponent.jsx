import React, { useState } from 'react';
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
      <div className="inputs">
        <label htmlFor="Username">Username</label>
        <input
          onChange={handleUsername}
          value={username}
          type="text"
          name="Username"
        ></input>
        {username ? (
          <>
            <label htmlFor="Search avatar">Search avatar</label>
            <input
              onChange={handleSelectedAvatar}
              value={selectedAvatar}
              type="text"
              name="Search avatar"
            ></input>
          </>
        ) : null}
      </div>
      {username ? (
        <Gallery
          selectedAvatar={selectedAvatar}
          onNameSelect={(name) => {
            props.onNameSelect(name);
            props.onUsernameSelect(username);
          }}
        ></Gallery>
      ) : null}
    </div>
  );
}
