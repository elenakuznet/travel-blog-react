import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css'

const Logo = () => (
  <NavLink to="/travel-blog-react" className={styles['nav__logo']}>
    Travel with me
  </NavLink>
);

export default Logo;
