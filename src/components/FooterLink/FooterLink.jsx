import { NavLink } from 'react-router-dom';
import styles from './FooterLink.module.css';


const FooterLink = ({ to, label }) => {
    return (
    <li className={styles['footer__list-item']}>
        <NavLink to={to} className={styles['footer__link']} end>
            {label}
        </NavLink>
    </li>

    )
}

export default FooterLink;