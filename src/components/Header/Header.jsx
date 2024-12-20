import { useState } from 'react';
import './Header.css';  
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Logo from '../shared/Logo/Logo';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import MenuToggle from '../MenuToggle/MenuToggle';

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
      <nav className="nav container">

        <Logo/>
      
        <ThemeToggle />

        <MenuToggle isOpen={menuOpen} toggleMenu={toggleMenu}/>

        {/* Nav Menu */}
        <div className={`nav__menu ${menuOpen ? "nav__menu--open" : ""}`}>

          <NavigationLinks closeMenu={closeMenu} />

          {/* Close Icon (ri-close-line) when the menu is open */}
          {menuOpen && (
            
            <button className="nav__close" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </button>
          )}
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
