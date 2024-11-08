import { NavLink } from 'react-router-dom';
import './NavigationLinks.css';

const NavigationLinks = ({ closeMenu }) => (
  <ul className="nav__list">
    <li className="nav__item">
      <NavLink 
        to="/travel-blog-react" 
        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
        onClick={closeMenu}
        end>
        Home
      </NavLink>
    </li>
    <li className="nav__item">
      <NavLink 
        to="/travel-blog-react/about"  
        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
        onClick={closeMenu}>
        About
      </NavLink>
    </li>
    <li className="nav__item">
      <NavLink 
        to="/travel-blog-react/popular" 
        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
        onClick={closeMenu}>
        Popular
      </NavLink>
    </li>
    <li className="nav__item">
      <NavLink 
        to="/travel-blog-react/explore" 
        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
        onClick={closeMenu}>
        Explore
      </NavLink>
    </li>
  </ul>
);

export default NavigationLinks;
