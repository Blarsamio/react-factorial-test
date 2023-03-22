import React, { useState } from 'react';
import './SideMenu.css';

function SideMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`SideMenu ${isOpen ? 'open' : 'closed'}`}>
      <button className="SideMenu-button" onClick={handleButtonClick}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>

      <div className="SideMenu-content">
        <h2>Menu Content</h2>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
