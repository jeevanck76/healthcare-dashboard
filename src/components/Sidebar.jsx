import React, { useState } from 'react';
import '../styles/Sidebar.css';
import links from '../data/navigationLinks';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // dropdown initially open

  return (
    <div className="sidebar">
      <h3
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', userSelect: 'none' }}
        aria-expanded={isOpen}
        aria-controls="sidebar-links"
      >
        General {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <ul id="sidebar-links">
          {links.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
