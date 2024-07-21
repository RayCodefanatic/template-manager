// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li>
              <NavLink to="/templates" onClick={toggleSidebar}>
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink to="/addTemplate" onClick={toggleSidebar}>
                Add Template
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
