import './MenuToggle.css';

const MenuToggle = ({ isOpen, toggleMenu }) => (
  <div className="nav__toggle" onClick={toggleMenu}>
    <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
  </div>
);

export default MenuToggle;