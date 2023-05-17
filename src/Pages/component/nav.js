import React from 'react';
import '../style/Nav.css';

function Nav() {
  return (
    <div className='card'>

      <nav className="navbar">

        <ul className="navbar-list">
          <li className="navbar-item">
            <a className="navbar-link">HOME</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link">XP</a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link">CONTATO</a>
          </li>
        </ul>
        <div className='logo'>
          <h2>Aninha <span>dev</span></h2>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
