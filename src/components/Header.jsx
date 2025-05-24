import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <h2>Healthcare.</h2>
      <input type="text" placeholder="Search" className="search" />
      <div className="header-right">
        <span className="icon">🔔</span>
        <span className="profile">👤 John Doe</span>
        <button className="add-btn">＋</button>
      </div>
    </div>
  );
}

export default Header;
