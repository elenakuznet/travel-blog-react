import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';  

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <NavLink to="/travel-blog-react" className="nav__logo" onClick={closeMenu}>
          Travel with me
        </NavLink>

        {/* Menu Toggle Button */}
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>

        {/* Nav Menu */}
        <div className={`nav__menu ${menuOpen ? "nav__menu--open" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink 
                to="/travel-blog-react" 
                className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
                onClick={closeMenu}
                end >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/travel-blog-react/about"  className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/travel-blog-react/popular" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")} onClick={closeMenu}>
                Popular
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/travel-blog-react/explore" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")} onClick={closeMenu}>
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
