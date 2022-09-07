import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar__item">
          <NavLink
            to="/"
            className="navbar__link">
            <img src={require('./../../assets/icons/home.svg').default} />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/work"
            className="navbar__link">
            <img src={require('./../../assets/icons/work.svg').default} />
            <span>Work</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/education"
            className="navbar__link">
            <img src={require('./../../assets/icons/education.svg').default} />
            <span>Education</span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/contact"
            className="navbar__link">
            <img src={require('./../../assets/icons/contact.svg').default} />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;