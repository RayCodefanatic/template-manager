// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/templates" onClick={toggleSidebar}>
                Templates
              </Link>
            </li>
            <li>
              <Link to="/addTemplate" onClick={toggleSidebar}>
                Add Template
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
