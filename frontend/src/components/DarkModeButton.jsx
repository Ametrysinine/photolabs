import React from 'react';

import '../styles/darkModeButton.scss';

const DarkModeButton = (props) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={() => props.toggleDarkMode()}/>
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeButton;
